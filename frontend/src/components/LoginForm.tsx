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

interface LoginForm {
	email: string;
	password: string;
}

interface RegisterForm extends LoginForm {
	confirmPassword: string;
}

export default function AuthSwitcher() {
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
	};

	const handleRegister = (e: FormEvent) => {
		e.preventDefault();
		console.log("Register: ", registerData);
	};

	return (
		<div className="flex items-center justify-center px-4">
			<div className="w-full max-w-md p-6 border rounded-xl shadow-md bg-white">
				<h2 className="text-2xl font-semibold text-center">
					Welcome back
				</h2>
				<p className="text-sm text-gray-500 text-center mt-2 mb-10">
					Please enter your details to sign in
				</p>

				<div className="flex gap-4 mt-6 mb-10 justify-center">
					<Button
						variant="outline"
						className={styles.logo}
					>
						<FcGoogle className={styles.logoSize} />
					</Button>
					<Button
						variant="outline"
						className={styles.logo}
					>
						<FaApple className={styles.logoSize} />
					</Button>
					<Button
						variant="outline"
						className={styles.logo}
					>
						<FaFacebook className={styles.logoSize} style={{color:"#3B5998"}}/>
					</Button>
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
						<form onSubmit={handleLogin} className="space-y-4 mt-4">
							<Input
								name="email"
								type="email"
								placeholder="Email"
								value={loginData.email}
								onChange={(e) => handleChange(e, setLoginData)}
								required
							/>
							<Input
								name="password"
								type="password"
								placeholder="Password"
								value={loginData.password}
								onChange={(e) => handleChange(e, setLoginData)}
								required
							/>
							<Button type="submit" className="w-full">
								Sign In
							</Button>
							<p className="text-center text-sm">
								Forgot password?{" "}
								<Link
									href="/"
									className="text-blue-600 underline"
								>
									Reset
								</Link>
							</p>
						</form>
					</TabsContent>

					<TabsContent value="sign-up">
						<form
							onSubmit={handleRegister}
							className="space-y-4 mt-4"
						>
							<Input
								name="email"
								type="email"
								placeholder="Email"
								value={registerData.email}
								onChange={(e) =>
									handleChange(e, setRegisterData)
								}
								required
							/>
							<Input
								name="password"
								type="password"
								placeholder="Password"
								value={registerData.password}
								onChange={(e) =>
									handleChange(e, setRegisterData)
								}
								required
							/>
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
							<Button type="submit" className="w-full">
								Create Account
							</Button>
						</form>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
