import "@/styles/globals.css";
import lazy from "next/dynamic";

import type { LayoutComponent } from "@/types";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Toaster = lazy(() => import("@/components/Toaster"));

export const metadata: Metadata = {
  title: "Phoenix Stores",
  description: "Get the best quality music systems in the market at very low & affordable prices.",
  keywords: ["E-Commerce", "Store", "Headphones", "Music"],
  creator: "Dev-Siri",
  themeColor: "red",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

const RootLayout: LayoutComponent = ({ children }) => (
  <html lang="en">
    <body className="layout">
      <Toaster />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
