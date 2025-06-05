import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter, FaPinterest  } from "react-icons/fa6";
import { AiFillTikTok, AiFillInstagram  } from "react-icons/ai";
import { facebookLink, instagramLink, tiktokLink, twitterLink } from "@/constants/links";

export default function Icons() {
    return (
        <div className="flex space-x-4 mb-3">
            <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFacebook className="w-7 h-7" />
            </a>
            <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <AiFillInstagram className="w-7 h-7" />
            </a>
            <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaSquareXTwitter className="w-7 h-7" />
            </a>
            <a
                href={tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <AiFillTikTok className="w-7 h-7" />
            </a>
            <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaPinterest className="w-7 h-7" />
            </a>
        </div>
    )
}