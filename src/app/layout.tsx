import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ClientOnly from "@/components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lavish Patel | Frontend Developer",
  description: "Frontend developer skilled in React & Next.js, creating clean UIs to solve real-world problems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
