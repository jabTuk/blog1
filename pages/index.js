import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const { user } = useUser();
  console.log("User: ", user);
  return (
    <div>
      <h1>this is the homepage</h1>
      <div>
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
  );
}

// import Image from "next/image";
// import HeroImage from "../public/hero.webp";
// import { Logo } from "../components/Logo";
// import Link from "next/link";
// export default function Home() {
//   return (
//     <div>
//       <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
//         <Image src={HeroImage} alt="hero" fill className="absolute" />
//         <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
//           <Logo />
//           <p>
//             The AI-powered SAAS solution to generate SEO-optimized blog posts in
//             minutes. Get high-quality content, withot wasting your time.
//           </p>
//           <Link href="/post/new" className="btn">
//             Begin
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
