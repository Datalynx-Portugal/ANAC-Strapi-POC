import { Poppins, Ubuntu, Teko, Noto_Sans,Libre_Baskerville,Kaushan_Script } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/style.scss'
import './assets/css/materialdesignicons.min.css'

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${ubuntu.variable} ${teko.variable} ${noto.variable} ${libre.variable} ${kaushan.variable}`}>{children}</body>
    </html>
  )
}
