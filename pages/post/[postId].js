// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
export default function Post() {
  return <div>this is the post page</div>;
}
// export const getServerSideProps = withPageAuthRequired(() => {
export const getServerSideProps = () => {
  return {
    props: {},
  };
};
// // import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { AppLayout } from "../../components/AppLayout";
// import clientPromise from "../../lib/mongodb";
// import { ObjectId } from "mongodb";

// export default function Post(props) {
//   console.log("props from [postId].js :", props);
//   return (
//     <div>
//       <h1>this is the post page</h1>
//     </div>
//   );
// }
// Post.getLayout = function getLayout(page, pageProps) {
//   return <AppLayout {...pageProps}>{page}</AppLayout>;
// };
// export const getServerSideProps = withPageAuthRequired({
//   async getServerSideProps(ctx) {
//     const userSession = await getSession(ctx.req, ctx.res);
//     const client = await clientPromise;
//     const db = client.db("blog");
//     const user = await db.collection("user").findOne({
//       auth0Id: userSession.user.sub,
//     });
//     const post = await db.collection("posts").findOne({
//       // _id: ObjectId(ctx.params.postId), //also  seems mongo returns similar id when document saved {insertedId: new ObjectId("64ac405c49cfc88f31742ca3")}
//       // BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
//       // userId: user._id,
//       _id: ObjectId("64ad53820f879d3a3d711e98"),
//     });
//     if (!post) {
//       return {
//         redirect: {
//           destination: "/post/new",
//           permanent: false,
//         },
//       };
//     }
//     return {
//       props: {
//         postContent: null,
//         // postContent: post.postContent,
//         title: post.title,
//         metaDescription: post.metaDescription,
//         keywords: post.keywords,
//       },
//     };
//   },
// });
