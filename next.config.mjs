/** @type {import('next').NextConfig} */

async function loadConfig() {
  const withBundleAnalyzer = (await import('@next/bundle-analyzer')).default({
    enabled: process.env.ANALYZE === 'true',
  });

  return withBundleAnalyzer({
    // reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
  });
}

export default loadConfig();
