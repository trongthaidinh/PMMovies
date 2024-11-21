export const defaultMetadata = {
  title: "PhimTrend - Xem phim HD Online",
  description:
    "PhimTrend - Website xem phim trực tuyến với kho phim đa dạng, chất lượng cao và cập nhật liên tục",
  keywords: "xem phim, phim online, phim hd, phim vietsub, phim thuyết minh",
  openGraph: {
    title: "PhimTrend - Xem phim HD Online",
    description:
      "PhimTrend - Website xem phim trực tuyến với kho phim đa dạng, chất lượng cao và cập nhật liên tục",
    type: "website",
    locale: "vi_VN",
    url: process.env.SITE_URL,
    siteName: "PhimTrend",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PhimTrend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhimTrend - Xem phim HD Online",
    description:
      "PhimTrend - Website xem phim trực tuyến với kho phim đa dạng, chất lượng cao và cập nhật liên tục",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.SITE_URL,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
};
