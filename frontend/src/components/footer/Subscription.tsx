import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
	return (
		<div className="flex w-full max-w-sm items-center gap-2">
			<Input type="email" placeholder="enteryour@gmail.com" />
			<Button type="submit" variant="outline" className="text-black">
				Subscribe
			</Button>
		</div>
	);
}
export default InputWithButton;
