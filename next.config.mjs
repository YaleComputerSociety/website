/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/
// });

// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "md", "mdx"]
// });


export default nextConfig;
