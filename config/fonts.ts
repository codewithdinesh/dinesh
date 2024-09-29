import { Inter as FontSans, Poppins, Comfortaa } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300"
});

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: "300",
  variable: '--font-comfortaa',
  display: 'swap',
})


