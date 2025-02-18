import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/home/Header";

export const metadata: Metadata = {
  title: "Reatch",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
