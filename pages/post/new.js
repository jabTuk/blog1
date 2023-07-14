export default function NewPost() {
  return <div>this is the new page</div>;
}

// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { AppLayout } from "../../components/AppLayout";
// import { useState } from "react";
// import { useRouter } from "next/router";

// export default function NewPost(props) {
//   const router = useRouter();
//   const [topic, setTopic] = useState("");
//   const [keywords, setKeywords] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("/api/generatePost", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({ topic, keywords }),
//     });
//     const json = await response.json();
//     console.log("result from new.js :", json); //shows up in browser, with post and postId
//     if (json?.postId) {
//       router.push("/post/${json.postId}");
//     } else console.log("hellow");
//     // setPostContent(json.post.postContent);
//   };
//   // const json = response.json();
//   // console.log("Results from new.js:", json.post.postContents);
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             <strong>Generate a blog post on the topic of:</strong>
//           </label>
//           <textarea
//             className="resize-none border border-slate-500 w-full block my-2 px-4 py-2 rounded-sm"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>
//             <strong>Targetin the following keywords:</strong>
//           </label>
//           <textarea
//             className="resize-none border border-slate-500 w-full block my-2 px-4 py-2 rounded-sm"
//             value={keywords}
//             onChange={(e) => setKeywords(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn">
//           Generate{" "}
//         </button>
//       </form>
//       <div
//         className="max-w-screen-sm p-10"
//         // dangerouslySetInnerHTML={{ __html: postContent }}
//       />
//     </div>
//   );
// }
// NewPost.getLayout = function getLayout(page, pageProps) {
//   return <AppLayout {...pageProps}>{page}</AppLayout>;
// };
// export const getServerSideProps = withPageAuthRequired(() => {
//   return {
//     props: {},
//   };
// });
