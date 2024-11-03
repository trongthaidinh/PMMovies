import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/meta";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Source_Sans_3 } from "next/font/google";
import ReactQueryProvider from "./ReactQueryProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import "swiper/css";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="PM Movies" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          src="https://alwingulla.com/88/tag.min.js"
          data-zone="111794"
          async
          data-cfasync="false"
        ></script>
      </head>
      <body className={`${sourceSans3.className} antialiased`}>
        <ReactQueryProvider>
          <AuthProvider>
            <div className="min-h-screen">
              <Header />
              <main className="container pt-safe">{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </ReactQueryProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#1f2937",
              color: "#fff",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
