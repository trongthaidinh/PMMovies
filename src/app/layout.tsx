import type { Metadata } from "next";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Source_Sans_3 } from "next/font/google";
import ReactQueryProvider from "./ReactQueryProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "react-hot-toast";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
