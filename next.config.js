// /** @type {import('next').NextConfig} */
//  const nextConfig = {
//    reactStrictMode: true,
//  }

// module.exports = nextConfig

//followin from gpt3.5 tom code as we were getting some error
/** @type {import('next').NextConfig} */ //removing comments shows @type as some error
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["s.gravatar.com"],
    //from error messsage as address changed we used following lh3.....
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
