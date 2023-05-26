/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://unsplash.com"],
  },
  // i18n: {
  //   localeDetection: true, // 👈
  //   locales: ["fa", "en"], // 👈
  //   defaultLocale: "fa", // 👈
  // },
};

module.exports = nextConfig;
