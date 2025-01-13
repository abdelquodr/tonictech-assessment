import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/layout";

const getManrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tonic Tech Assessments",
  description: "Get started with Tonic Tech Assessments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${getManrope.variable} antialiased sm:px-4 md:px-16 lg:px-24 xl:px-40 2xl:w-[1600px] 2xl:mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
