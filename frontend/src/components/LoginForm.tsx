"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { Separator } from "./ui/separator";
import styles from "./login.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface LoginForm {
	email: string;
	password: string;
}

interface RegisterForm extends LoginForm {
	confirmPassword: string;
}

export default function AuthSwitcher() {
	const [showPassword, setShowPassword] = useState(false);
     const router = useRouter();
	const [loginData, setLoginData] = useState<LoginForm>({
		email: "",
		password: "",
	});
	const [registerData, setRegisterData] = useState<RegisterForm>({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement>,
		formSetter: React.Dispatch<React.SetStateAction<any>>
	) => {
		const { name, value } = e.target;
		formSetter((prev: any) => ({ ...prev, [name]: value }));
	};

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
		console.log("Login: ", loginData);
          setLoginData({ email: "", password: "" });
          router.refresh();
	};

	const handleRegister = (e: FormEvent) => {
		e.preventDefault();
		console.log("Register: ", registerData);
          setRegisterData({ email: "", password: "", confirmPassword: "" });
          router.refresh();
	};

	return (
		<div className="min-h-screen w-full flex items-center justify-center px-4 overflow-x-hidden">
			<div className="w-full max-w-md p-6 border rounded-3xl shadow-md bg-white">
				<h2 className="text-2xl font-semibold text-center">
					Welcome back
				</h2>
				<p className="text-sm text-gray-500 text-center mt-2 mb-10">
					Please enter your details to sign in
				</p>

				<div className="flex gap-4 mt-6 mb-4 justify-center">
					<a
						href="/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.logo}
					>
						<FcGoogle style={{ width: "20px", height: "20px" }} />
					</a>
					<a
						href="/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.logo}
					>
						<FaApple style={{ width: "20px", height: "20px" }} />
					</a>
					<a
						href="/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.logo}
					>
						<FaFacebook
							style={{
								color: "#3B5998",
								width: "20px",
								height: "20px",
							}}
						/>
					</a>
				</div>

				<div className="flex items-center gap-4 w-full my-4">
					<Separator className="flex-1" />
					<span className="text-sm text-muted-foreground">or</span>
					<Separator className="flex-1" />
				</div>

				<Tabs defaultValue="sign-in" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="sign-in">Sign in</TabsTrigger>
						<TabsTrigger value="sign-up">Sign Up</TabsTrigger>
					</TabsList>

					<TabsContent value="sign-in">
						<form onSubmit={handleLogin} className="mt-5 relative">
							<div className="mb-1 text-xs">Email adress</div>
							<Input
								name="email"
								type="email"
								placeholder="Enter your email"
								value={loginData.email}
								onChange={(e) => handleChange(e, setLoginData)}
								required
							/>
							<div className="mb-1 mt-4 text-xs">Password</div>
							<Input
								name="password"
								type={showPassword ? "text" : "password"}
								placeholder="Enter your password"
								value={loginData.password}
								onChange={(e) => handleChange(e, setLoginData)}
								required
								className="pr-10"
							/>
							<button
								type="button"
								onClick={() => setShowPassword((prev) => !prev)}
								className="absolute right-3 top-1/2 transform -translate-y text-gray-500 hover:text-gray-700"
								tabIndex={-1}
							>
								{showPassword ? <FiEyeOff /> : <FiEye />}
							</button>
							<div className="flex justify-between items-center text-xs mt-3 mb-4">
								<label className="flex items-center space-x-2">
									<input
										type="checkbox"
										className="form-checkbox"
									/>
									<span>Remember for 30 days</span>
								</label>
								<Link
									href="/forgot"
									className="text-blue-600 hover:underline"
								>
									Forgot password?
								</Link>
							</div>

							<Button type="submit" className="w-full">
								Sign In
							</Button>
						</form>
					</TabsContent>

					<TabsContent value="sign-up">
						<form onSubmit={handleRegister} className="mt-5">
							<div className="mb-1 text-xs">Email adress</div>
							<Input
								name="email"
								type="email"
								placeholder="Enter your email"
								value={registerData.email}
								onChange={(e) =>
									handleChange(e, setRegisterData)
								}
								required
							/>
							<div className="mb-1 mt-4 text-xs">Password</div>
							<Input
								name="password"
								type="password"
								placeholder="Enter your password"
								value={registerData.password}
								onChange={(e) =>
									handleChange(e, setRegisterData)
								}
								required
							/>
							<div className="mb-1 mt-4 text-xs">
								Confirm Password
							</div>
							<Input
								name="confirmPassword"
								type="password"
								placeholder="Confirm Password"
								value={registerData.confirmPassword}
								onChange={(e) =>
									handleChange(e, setRegisterData)
								}
								required
							/>
							<Button
								type="submit"
								className="w-full mt-5 text-base h-11"
							>
								Create Account
							</Button>
						</form>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
