import Image from "next/image";
import Icons from "./Icons";
import { InputWithButton } from "./Subscription";
import { jost } from "@/styles/fonts";
import { Separator } from "../ui/separator";
import Link from "next/link";
import {
	footerLeftNavbarItems,
	footerRightNavbarItems,
} from "@/constants/navbar";
import styles from "./Footer.module.css";
import {
	appFooterPrivacyPolicy,
	appFooterSubscribe,
	appFooterTermsOfService,
	appFooterText,
} from "@/constants/words";

export default function Footer() {
	return (
		<footer className={`${styles.footer} ${jost.className}`}>
			<div className={styles.container}>
				{/* LOGO */}
				<div className={styles.logo}>
					<Image
						src="/ArmoireLogo.png"
						alt="logo"
						width={150}
						height={0}
					/>
				</div>

				<div className="flex flex-col md:flex-row gap-8">
					{/* CONTACT */}
					<div className="flex-1">
						<h3 className={styles.heading}>CONTACT</h3>
						<Icons />
					</div>

					{/* ARMOIRE */}
					<div className="w-32">
						<h3 className={styles.heading}>ARMOIRE</h3>
						<ul className={styles.list}>
							{footerLeftNavbarItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className={styles.link}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* CLIENT SUPPORT */}
					<div className="w-32">
						<h3 className={styles.heading}>CLIENT SUPPORT</h3>
						<ul className={styles.list}>
							{footerRightNavbarItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className={styles.link}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* SUBSCRIBE */}
					<div className="flex-[1.5]">
						<h3 className={styles.heading}>UPDATE</h3>
						<p className={styles.description}>
							{appFooterSubscribe}
						</p>
						<InputWithButton />
					</div>
				</div>

				<hr className="border-t border-gray-300 mt-10 mb-4" />

				<div className={styles.copyrightContainer}>
					<p className="text-xs text-gray-500">{appFooterText}</p>
					<Separator className="h-3" orientation="vertical" />
					<Link href="/privacy" className={styles.link}>
						{appFooterPrivacyPolicy}
					</Link>
					<Separator className="h-3" orientation="vertical" />
					<Link href="/terms" className={styles.link}>
						{appFooterTermsOfService}
					</Link>
				</div>
			</div>
		</footer>
	);
}
