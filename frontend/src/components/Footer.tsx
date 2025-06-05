import Image from "next/image";
import Icons from "./Icons";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className={'bg-black text-white px-6 pt-10 pb-20 mt-10'}>
        <div className="max-w-7xl mx-auto space-y-10">

            {/* LOGO */}
            <div className="w-full flex flex-col">
                <Image src='/OutzyLogoWhite.png' alt="logo" width={150} height={0} />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
      
                {/* CONTACT */}
                <div className="flex-1" >
                    <h3 className="font-semibold mb-3">Contact us</h3>
                    <Icons/>
                    <p className="text-xs text-gray-500">&copy; 2025 Outzy. All rights reserved.</p>
                </div>

                {/* ABOUT */}
                <div className="w-32">
                    <h3 className="font-semibold mb-3">About</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                    <li><a href="/about" className="hover:underline">Our Story</a></li>
                    <li><a href="/team" className="hover:underline">Team</a></li>
                    <li><a href="/careers" className="hover:underline">Careers</a></li>
                    </ul>
                </div>

                {/* SUPPORT */}
                <div className="w-32">
                    <h3 className="font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                    <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    <li><a href="/privacy" className="hover:underline">Privacy</a></li>
                    </ul>
                </div>

                {/* SUBSCRIBE */}
                <div className="flex-[1.5]">
                    <h3 className="font-semibold mb-3">Stay Updated</h3>
                    <p className="text-sm text-gray-400 mb-3">
                        Subscribe to get the latest trends and outfit tips.
                    </p>
                    <div className="flex">
                        <Input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2 rounded-l bg-gray-800 text-white border border-gray-700 text-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
