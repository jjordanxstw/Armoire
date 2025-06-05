import { Noto_Sans, Noto_Serif_Display, Roboto } from "next/font/google";

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const notoSerifDisplay = Noto_Serif_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],      
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
});