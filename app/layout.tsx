import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "Borel Creative Services | AI Agency for Small businesses",
  description:
    "Borel Creative Services helps brands scale with AI-powered ad strategy, content creation, and brand activation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
