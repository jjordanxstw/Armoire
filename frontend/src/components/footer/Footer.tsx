import Image from "next/image";
import Icons from "./Icons";
import { InputWithButton } from "./Subscription";
import { jost } from "@/styles/fonts";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className={'bg-black text-white px-6 pt-10 pb-6 '+`${jost.className}`}>
        <div className="max-w-5xl mx-auto">

            {/* LOGO */}
            <div className="w-full flex flex-col mb-6">
                <Image src='/ArmoireLogo.png' alt="logo" width={150} height={0} />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
      
                {/* CONTACT */}
                <div className="flex-1" >
                    <h3 className="font-semibold mb-4">CONTACT</h3>
                    <Icons/>
                </div>

                {/* ABOUT */}
                <div className="w-32">
                    <h3 className="font-semibold mb-4">ARMOIRE</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                    <li><a href="/about" className="hover:underline">Our Story</a></li>
                    <li><a href="/team" className="hover:underline">Team</a></li>
                    <li><a href="/careers" className="hover:underline">Contact us</a></li>
                    <li><a href="/careers" className="hover:underline">How it works</a></li>
                    </ul>
                </div>

                {/* SUPPORT */}
                <div className="w-32">
                    <h3 className="font-semibold mb-4">CLIENT SUPPORT</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                    <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    <li><a href="/ourOpinion" className="hover:underline">Our Opinions</a></li>
                    </ul>
                </div>

                {/* SUBSCRIBE */}
                <div className="flex-[1.5]">
                    <h3 className="font-semibold mb-4">UPDATE</h3>
                    <p className="text-sm text-gray-400 mb-3">
                        Subscribe to get the latest trends and outfit tips.
                    </p>
                    <div className="flex">
                        <InputWithButton/>
                    </div>
                </div>
            </div>
            <hr className="border-t border-gray-300 mt-10 mb-4" />
            <div className="flex justify-first items-center text-sm space-x-2">
                <p className="text-xs text-gray-500">Copyright &copy; 2025 Armoire Inc. All rights reserved.</p>
                <Separator className="h-3" orientation="vertical" />
                <a href="/policy" className="text-xs">Privacy Policy</a>
                <Separator className="h-3" orientation="vertical" />
                <a href="/term" className="text-xs">Terms of service</a>
            </div>
        </div>
    </footer>
  );
}
