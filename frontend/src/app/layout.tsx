
import '../styles/globals.css'

import TopNavbar from '@/components/TopNavBar'

export const metadata = {
  title: 'Outzy',
  description: 'Manage and mix your clothes effortlessly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopNavbar />
        <main className="px-6 py-4">{children}</main>
      </body>
    </html>
  );
}