'use client'

import { useEffect, useState } from "react"

export default function HomePage() {

  useEffect(() => {
      window.scrollTo(0,0)
  },[])

  return (
    <>
      <main>
        <section id="about" className="min-h-screen bg-beige flex items-center justify-center animate-fade-in">
          <h2 className="text-3xl">About Outzy</h2>
        </section>
        <section id="features" className="min-h-screen bg-grey-500 flex items-center justify-center animate-slide-in">
          <h2 className="text-3xl">Features</h2>
        </section>
        <section id="contact" className="min-h-screen bg-beige flex items-center justify-center animate-fade-in">
          <h2 className="text-3xl">Contact Us</h2>
        </section>
      </main>
    </>
  )
}
