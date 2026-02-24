import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import CursorTrail from "@/components/CursorTrail";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
});

export const metadata = {
  title: "Naman | Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <CursorTrail />
        {children}
        </body>
    </html>
  );
}