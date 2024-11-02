/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://phimtrend.id.vn/",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/auth/*", "/profile"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/auth/*", "/profile"],
      },
    ],
  },
  generateIndexSitemap: false,
};
