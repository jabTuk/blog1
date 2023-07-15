import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  // const { user } = await getSession(req, res);
  // const client = await clientPromise;
  // const db = client.db("blog");

  // const userProfile = await db.collection("users").findOne({
  //   auth0Id: user.sub,
  // });
  // if (!userProfile?.availableTokens) {
  //   res.status(403);
  //   return;
  // }
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(config);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    temperature: 0.2,
    max_tokens: 3600,
    prompt: "Generate a blog post about owning a kite",
    // prompt: `write a long and detailed SEO-friendly blog post about ${topic},
    // that targenting comma-seperated keywords: ${keywords}.
    // The content should be formatted to SEO-friendly HTML.
    // The response must also include appropriate HTML title and meta description content.
    // The return format must be stringified JSON in the followin format:
    // {"postContent":post content here
    //  "title": title goes here
    //  "metaDescription": meta description goes here}`,
  });
  console.log("rsponse: ", response);
  res.status(200).json({ post: response.data.choices });
}
