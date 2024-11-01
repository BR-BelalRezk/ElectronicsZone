import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Electronics Zone",
  icons: {
    icon: "/ez.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`antialiased bg-slate-50/75`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
