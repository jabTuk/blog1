import Image from "next/image";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export const AppLayout = ({ children }) => {
  const { user } = useUser();
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="flex flex-col text-white overflow-hidden">
        <div className="bg-slat-800">
          <div>logo</div>
          <div>cta button</div>
          <div>tokens</div>
        </div>
        <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
          list of posts
        </div>
        <div className="bg-cyan-800">
          {" "}
          {!!user ? (
            <>
              <div>
                <Image
                  src={user.picture}
                  alt={user.name}
                  height={50}
                  width={50}
                />
                <div>{user.email}</div>
              </div>
              <Link href="/api/auth/logout">Logout</Link>
            </>
          ) : (
            <Link href="/api/auth/login">Login</Link>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoins } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import Image from "next/image";
// import { Logo } from "../Logo";
// export const AppLayout = ({ children }) => {
//   const { user } = useUser();

//   return (
//     <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
//       <div className="flex flex-col text-white overflow-hidden">
//         <div className="bg-slate-800 px-2">
//           <Logo />
//           <Link
//             href="/post/new"
//             className="bg-green-500 tracking-wider w-full text-cebter text-white font-bold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-color block"
//           >
//             {" "}
//             new post
//           </Link>
//           <Link href="/token-topup" className="block mt-2 text-center">
//             <FontAwesomeIcon
//               icon={faCoins}
//               className="text-yellow-500"
//             ></FontAwesomeIcon>

//             <span className="pl-1">0 token available</span>
//           </Link>
//         </div>

//         <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800 ">
//           list of posts
//         </div>
//         <div className="bg-cyan-800 flex items-center gap-2 border-t border-t-black/50 h-20 px-2">
//           {" "}
//           {!!user ? (
//             <>
//               <div className="min-w-[50px]">
//                 <Image
//                   src={user.picture}
//                   alt={user.name}
//                   height={50}
//                   width={50}
//                   className="rounded-full"
//                 />
//               </div>
//               <div className="flex-1">
//                 <div className="font-bold">{user.email}</div>
//                 <Link className="text-sm" href="/api/auth/logout">
//                   Logout
//                 </Link>
//               </div>
//             </>
//           ) : (
//             <Link href="/api/auth/login">Login</Link>
//           )}
//         </div>
//       </div>

//       <div>{children}</div>
//     </div>
//   );
// };
