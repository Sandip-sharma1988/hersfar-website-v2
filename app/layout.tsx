import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HerSfar — Hindi-first Menopause Companion",
  description: "India-first AI-supported menopause journey companion for women.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="hi"><body>{children}</body></html>;
}
