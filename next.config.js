/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://unsplash.com",
      "https://images.unsplash.com",
      "192.168.1.194",
    ],
  },
  // i18n: {
  //   localeDetection: true, // 👈
  //   locales: ["fa", "en"], // 👈
  //   defaultLocale: "fa", // 👈
  // },
};

module.exports = nextConfig;
