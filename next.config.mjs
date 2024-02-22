/** @type {import('next').NextConfig} */
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

export default nextConfig;
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
