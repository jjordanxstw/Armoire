"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function TopRightMenu() {
	const router = useRouter();

	return (
		<>
			<div className="space-x-5">
				<Button className="bg-black text-white" onClick={() => router.push("/login")} variant="ghost">
					Try Armoire
				</Button>
				<Button className="bg-accent" onClick={() => router.push("/login")} variant="outline">
					Sign In
				</Button>
			</div>
		</>
	);
}
