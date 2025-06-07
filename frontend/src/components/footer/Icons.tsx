import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter, FaPinterest } from "react-icons/fa6";
import { AiFillTikTok, AiFillInstagram } from "react-icons/ai";
import {
	facebookLink,
	instagramLink,
	tiktokLink,
	twitterLink,
} from "@/constants/links";
import styles from "./Footer.module.css";

export default function Icons() {
	return (
		<div className="flex space-x-6 mb-3">
			<a href={facebookLink} target="_blank" rel="noopener noreferrer">
				<FaFacebook className={styles.icon} />
			</a>
			<a href={instagramLink} target="_blank" rel="noopener noreferrer">
				<AiFillInstagram className={styles.icon} />
			</a>
			<a href={twitterLink} target="_blank" rel="noopener noreferrer">
				<FaSquareXTwitter className={styles.icon} />
			</a>
			<a href={tiktokLink} target="_blank" rel="noopener noreferrer">
				<AiFillTikTok className={styles.icon} />
			</a>
			<a href={facebookLink} target="_blank" rel="noopener noreferrer">
				<FaPinterest className={styles.icon} />
			</a>
		</div>
	);
}
