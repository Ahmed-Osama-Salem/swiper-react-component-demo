import "./globals.css";
import { Nunito } from "next/font/google";
import "@ahmed-osama-salem/swiper-react-component/dist/style.css";

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
