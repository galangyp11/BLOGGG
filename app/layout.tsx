import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLOGGG",
  description: "BLOGGG galang xixixi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="my-2">
          <Navbar />
        </div>

        <div className="container mx-auto lg:px-4 max-w-screen-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
