import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import "./globals.css"
import { Geist, Geist_Mono, Just_Another_Hand } from "next/font/google"
import  AuthProvider  from "./component/AuthProvider"


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const justAnotherHand = Just_Another_Hand({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-hand",
});


export const metadata = {
  title: "MY Notes",
  description:
    "A place where I write down my thoughts, emotions, feelings, and experiences.",
};


export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body
        className={`${justAnotherHand.className} ${geist.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

