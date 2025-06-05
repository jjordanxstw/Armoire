import Image from "next/image";
import Icons from "./Icons";
import { InputWithButton } from "./Input";

export default function Footer() {
  return (
    <footer className={'bg-black text-white px-6 pt-10 mt-10 pb-6'}>
        <div className="max-w-7xl mx-auto">

            {/* LOGO */}
            <div className="w-full flex flex-col mb-6">
                <Image src='/OutzyLogoWhite.png' alt="logo" width={150} height={0} />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
      
                {/* CONTACT */}
                <div className="flex-1" >
                    <h3 className="font-semibold mb-3">Contact us</h3>
                    <Icons/>
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
                        <InputWithButton/>
                    </div>
                </div>
            </div>
            <hr className="border-t border-gray-300 mt-10 mb-4" />
            <p className="text-xs text-gray-500">Copyright &copy; 2025 Outzy. All rights reserved.</p>
        </div>
    </footer>
  );
}
