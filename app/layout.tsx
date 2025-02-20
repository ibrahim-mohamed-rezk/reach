import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/home/Header";

export const metadata: Metadata = {
  title: "Reach Agency",
  description:
    "Reach Agency, we understand that every business is unique. But when it comes to achieving lasting growth, we believe in a core set of principles that drive success. We're not just about delivering results - we're about building genuine partnerships that unlock your full potential. We envision a future where we are the catalyst for transformative business growth. By pioneering cutting-edge programming and marketing strategies, we empower our clients to become industry leaders who leave a lasting legacy of innovation.",
  icons: {
    icon: "/images/logo.ico",
  },
  keywords: ["Reach", "Agency", "Digital", "Masterpieces", "Daily"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="w-full">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
