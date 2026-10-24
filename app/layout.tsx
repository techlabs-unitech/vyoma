import type { Metadata } from "next";
import { Sora, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components";

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Vyoma Eduventures LLP | Learning Beyond Boundaries",
  description:
    "Connecting learners, institutions, educators and industry through meaningful learning, practical skills and education partnerships.",
};

// Sets the theme before first paint (saved choice, else system preference) to avoid a flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(!t){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${serif.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body><Header />{children}<Footer /></body>
    </html>
  );
}
