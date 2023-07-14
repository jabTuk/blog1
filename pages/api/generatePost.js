import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { Configuration, OpenAIApi } from "openai";
import clientPromise from "../../lib/mongodb";

export default withApiAuthRequired(async function handler(req, res) {
  const { user } = await getSession(req, res);
  const client = await clientPromise;
  const db = client.db("blog");

  const userProfile = await db.collection("users").findOne({
    auth0Id: user.sub,
  });
  if (!userProfile?.availableTokens) {
    res.status(403);
    return;
  }
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(config);
  let { topic, keywords } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    temperature: 0.2,
    max_tokens: 3600,
    prompt: `write a long and detailed SEO-friendly blog post about ${topic},
    that targenting comma-seperated keywords: ${keywords}.
    The content should be formatted to SEO-friendly HTML.
    The response must also include appropriate HTML title and meta description content.
    The return format must be stringified JSON in the followin format:
    {"postContent":post content here
     "title": title goes here
     "metaDescription": meta description goes here}`,
  });
  // console.log("respnse from gpt", response); works and shows up fine in node server
  await db.collection("users").updateOne(
    {
      auth0Id: user.sub,
    },
    {
      $inc: {
        availableTokens: -1,
      },
    }
  );

  const parsed = JSON.parse(
    response.data.choices[0]?.text.split("\n").join("")
  );

  const post = await db.collection("posts").insertOne({
    postcontent: parsed?.postContent,
    title: parsed?.title,
    metaDescription: parsed?.metaDescription,
    topic,
    keywords,
    userId: userProfile._id,
    created: new Date(),
  });
  console.log("post after insert in db:", post); // shows up in node server which mongo returns with ack : true and insertedId: new ObjectId("64ac405c49cfc88f31742ca3")
  res.status(200).json({
    postId: post.insertedId,
    post: JSON.parse(response.data.choices[0]?.text.split("\n").join("")),
  });
});
