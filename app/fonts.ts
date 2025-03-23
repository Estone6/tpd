import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google';
import localFont from 'next/font/local';

// Configure Cormorant Garamond font
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

// Configure Nunito Sans font
export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-nunito",
});

// Configure local TuesdayNight font
export const tuesdayNight = localFont({
  src: [
    {
      path: '../public/fonts/TuesdayNight-Regular.otf',
      weight: '500',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-tuesday',
}); 