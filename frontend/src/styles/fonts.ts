import { Noto_Sans, Jost } from "next/font/google";

export const notoSans = Noto_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	display: "swap",
});

export const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-roboto",
	fallback: ["system-ui", "sans-serif"],
	preload: true,
});
