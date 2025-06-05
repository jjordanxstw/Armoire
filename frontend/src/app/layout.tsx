
import Footer from '@/components/Footer';
import '../styles/globals.css'

import TopNavbar from '@/components/TopNavBar'
import { exo2 } from '@/styles/fonts';

export const metadata = {
  title: 'Outzy',
  description: 'Manage and mix your clothes effortlessly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${exo2.className}`}>
        <TopNavbar defaultBgColor='bg-transparent' scrolledBgColor='bg-white backdrop-blur-md' />
        <main className="px-6 py-4">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}