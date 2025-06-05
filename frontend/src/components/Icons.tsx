import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { facebookLink, instagramLink, tiktokLink, twitterLink } from "@/styles/links";

export default function Icons() {
    return (
        <div className="flex space-x-4 mb-3">
            <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFacebook className="w-5 h-5" />
            </a>
            <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram className="w-5 h-5" />
            </a>
            <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaSquareXTwitter className="w-5 h-5" />
            </a>
            <a
                href={tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <AiFillTikTok className="w-5 h-5" />
            </a>
        </div>
    )
}