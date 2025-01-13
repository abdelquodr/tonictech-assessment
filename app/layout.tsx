import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/layout";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tonic Tech Assessments",
  description: "Get started with Tonic Tech Assessments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title
          dangerouslySetInnerHTML={{
            __html: metadata?.title ?? "Default Title",
          }}
        />
        <meta
          name="description"
          content={metadata.description ?? "Default description"}
        />
      </head>
      <body
        className={`${manrope.variable} antialiased sm:px-4 md:px-16 lg:px-24 xl:px-40 2xl:w-[1600px] 2xl:mx-auto`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
