// /** @type {import('next').NextConfig} */
//  const nextConfig = {
//    reactStrictMode: true,
//  }

// module.exports = nextConfig

//followin from gpt3.5 tom code as we were getting some error
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s.gravatar.com"],
  },
};

module.exports = nextConfig;
