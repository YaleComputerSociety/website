/** @type {import('next').NextConfig} */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

async function loadConfig() {
  const withBundleAnalyzer = (await import("@next/bundle-analyzer")).default({
    enabled: process.env.ANALYZE === "true",
  });

  return withBundleAnalyzer({
    // reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
  });
}

export default loadConfig();
=======
const nextConfig = {};
=======
const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};
>>>>>>> 3daf704 (Add in eslintrc file and vscode settings from nextjs project version (forgot to copy over previously; configure build to generate a static site)
=======
const nextConfig = {};
>>>>>>> 1a5d1b6 (Update package.json scripts)

export default nextConfig;
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
