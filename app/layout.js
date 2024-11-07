import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/ui/StairTransition";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfairdisplay", // CSS variable for custom font
});

export const metadata = {
  title: "Ajay's Portfolio",
  description: "FullStack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair_display.variable} antialiased`}>
        <Header/>
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

