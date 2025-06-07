import { inter } from "@/styles/fonts";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className={
				"min-h-screen flex items-center justify-center " +
				inter.className
			}
			style={{
				backgroundImage: "url('/sky01.jpg')",
			}}
		>
			<div className="max-w-md w-full space-y-8">{children}</div>
		</div>
	);
}
