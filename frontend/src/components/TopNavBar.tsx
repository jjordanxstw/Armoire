'use client'

export default function TopNavbar() {
  return (
    <nav className="w-full px-4 py-4 bg-black text-white flex justify-between items-center fixed top-0 z-50 shadow-md">
        <h1 className="text-xl font-bold pl-4">Outzy</h1>
        <div className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#contact" className="hover:underline">Contact</a>
        </div>
    </nav>
  )
}