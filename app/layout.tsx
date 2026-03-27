import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amitt Bhardwj — AI-First Python Developer | Agent as a Service",
  description:
    "AI-First Python Developer based in Montreal. I help businesses integrate intelligent AI agents to automate workflows and scale efficiently. 5+ years of backend engineering experience.",
  keywords: [
    "AI Developer",
    "Python Developer",
    "Agent as a Service",
    "LLM Integration",
    "AI Automation",
    "FastAPI",
    "Montreal",
  ],
  authors: [{ name: "Amitt Bhardwj" }],
  openGraph: {
    title: "Amitt Bhardwj — AI-First Python Developer",
    description:
      "I help businesses integrate intelligent AI agents to automate workflows and scale efficiently.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
