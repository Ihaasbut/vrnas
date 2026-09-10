import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/header/Header";

import "@/assets/styles/globals.scss";

const chakraPetch = localFont({
   src: "../assets/fonts/ChakraPetch-Regular.otf",
   display: "swap",
   variable: "--font-chakra-petch",
   weight: "400",
   style: "normal",
});

const fonts = `${chakraPetch.variable}`;

export const metadata: Metadata = {
   title: "VRNas — VR-услуги",
   description:
      "VRNas — услуги виртуальной реальности для образования, развлечений, архитектуры и мероприятий.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ru" className={fonts}>
         <body>
            <div className="page-bg">
               <Header />
               {children}
               <Footer />
            </div>
         </body>
      </html>
   );
}
