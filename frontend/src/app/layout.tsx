
import Footer from '@/components/Footer';
import '../styles/globals.css'

import TopNavbar from '@/components/TopNavBar'
import { notoSans, roboto } from '@/styles/fonts';

export const metadata = {
  title: 'Closify - Effortless Outfit Management',
  description: 'Manage and mix your clothes effortlessly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='text-sm'>
        <TopNavbar defaultBgColor='bg-transparent' scrolledBgColor='bg-white backdrop-blur-md' />
        <div className='min-w-[1024px] flex flex-col min-h-screen'>
          <main className={`${notoSans.className}`}>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}