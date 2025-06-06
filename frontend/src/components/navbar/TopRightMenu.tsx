"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function TopRightMenu() {
	const router = useRouter();

	return (
		<>
			<div className="space-x-4">
				<Button variant="ghost">Try Armoire</Button>
				<Button onClick={() => router.push("/login")} variant="outline">
					Sign In
				</Button>
			</div>
		</>
	);
}
