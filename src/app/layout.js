import React from "react"
import Footer from "./component/Footer"
import "./globals.css"
import { Geist, Geist_Mono, Just_Another_Hand, Patrick_Hand } from "next/font/google"
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

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-patrick-hand",
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
        className={`${patrickHand.className} ${geist.variable} ${geistMono.variable} antialiased h-dvh `}
      >
        <AuthProvider>
         
          {children}

          
        </AuthProvider>
      </body>
    </html>
  );
}

