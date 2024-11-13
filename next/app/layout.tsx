import type { Viewport } from "next";
import { Locale, i18n } from '@/i18n.config'

import React from "react";

import NavbarTwo from "@/template/components/navbar/navbarTwo";
import ScrollTop from "@/template/components/scrollTop";
import FooterSix from "@/template/components/footer/footerSix";

/* import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#06b6d4" },
  ],
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
} */



import { Poppins, Ubuntu, Teko, Noto_Sans,Libre_Baskerville,Kaushan_Script } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/style.scss'
import '@/assets/css/materialdesignicons.min.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
})

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight:['300','400','500','700'],
  variable: '--font-ubuntu',
})
const teko = Teko({ 
  subsets: ['latin'],
  weight:['300','400','500','700'],
  variable: '--font-teko',
})
const noto = Noto_Sans({ 
  subsets: ['latin'],
  weight:['400','700'],
  variable: '--font-noto',
})
const libre = Libre_Baskerville({ 
  subsets: ['latin'],
  weight:['400','700'],
  variable: '--font-libre',
})
const kaushan = Kaushan_Script({ 
  subsets: ['latin'],
  weight:['400'],
  variable: '--font-kaushan',
})

export const metadata = {
  title: 'Starty - Next Js Multipurpose Tamplate',
  description: 'Starty - Next Js Multipurpose Tamplate',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale; navDark: boolean }
}) {
  return (
    <html lang={params.lang}>
      <body className={`${poppins.variable} ${ubuntu.variable} ${teko.variable} ${noto.variable} ${libre.variable} ${kaushan.variable}`}>
      <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right" navDark={true}/>
        {children}
        <FooterSix/>
        <ScrollTop/>
      </body> 
    </html>
  );
}
