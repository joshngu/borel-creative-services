import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "Borel Creative Services | More leads, bookings, and faster replies",
  description:
    "Borel Creative Services helps local businesses get more leads, more bookings, and faster replies.",
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
