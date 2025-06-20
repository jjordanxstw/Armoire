"use client";

import { topNavbarItems } from "@/constants/navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

export default function TopMenu() {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<>
			<div className="flex justify-start items-center space-x-12">
				<Image
					className="cursor-pointer"
					onClick={() => router.push("/")}
					src="/ArmoireLogoBlack.png"
					alt="logo"
					width={120}
					height={0}
				/>
				<div className="space-x-8">
					{topNavbarItems.map((item) => {
						const isActive = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`${styles.link} ${
									isActive
										? `${styles["link-hover"]}`
										: `${styles["link-unhover"]}`
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
}
