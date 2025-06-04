'use client'

import TopNavbar from '@/components/TopNavBar'

export default function HomePage() {
  return (
    <>
      <main className="pt-16 px-6 py-4">
        <section id="about" className="min-h-screen bg-white flex items-center justify-center animate-fade-in">
          <h2 className="text-3xl">About Outzy</h2>
        </section>
        <section id="features" className="min-h-screen bg-gray-100 flex items-center justify-center animate-slide-in">
          <h2 className="text-3xl">Features</h2>
        </section>
        <section id="contact" className="min-h-screen bg-white flex items-center justify-center animate-fade-in">
          <h2 className="text-3xl">Contact Us</h2>
        </section>
      </main>
    </>
  )
}
