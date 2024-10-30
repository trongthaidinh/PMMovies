import type { Metadata } from "next";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Source_Sans_3 } from "next/font/google";
import ReactQueryProvider from "./ReactQueryProvider";

import "swiper/css";
import "./globals.css";

export const metadata: Metadata = {
  title: "PM Movies",
  description: "PM Movies",
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans3.className} antialiased`}>
        <ReactQueryProvider>
          <div className="min-h-screen">
            <Header />
            <main className="container pt-safe">{children}</main>
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
