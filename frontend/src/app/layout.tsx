import Footer from "@/components/footer/Footer";
import "../styles/globals.css";

import TopNavbar from "@/components/navbar/TopNavBar";
import { notoSans } from "@/styles/fonts";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
	title: "Armoire",
	description: "Manage and mix your clothes effortlessly.",
	icons: {
		icon: "/Logo01.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="text-sm">
				<ScrollToTop />
				<TopNavbar
					defaultBgColor="bg-transparent"
					scrolledBgColor="bg-white backdrop-blur-md"
				/>
				<div className="flex flex-col min-h-screen">
					<main className={`${notoSans.className}`}>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
