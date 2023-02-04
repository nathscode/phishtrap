import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import registerValidate from "../lib/validate";
import { signIn, signOut } from "next-auth/react";
import Main from "../components/Main";

const Register = () => {
	const router = useRouter();
	// formik hook
	const formik = useFormik({
		initialValues: {
			fullName: "",
			username: "",
			email: "",
			password: "",
		},
		validate: registerValidate,
		onSubmit,
	});

	async function onSubmit(values) {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(values),
		};

		await fetch("http://localhost:3000/api/auth/signup", options)
			.then((res) => res.json())
			.then((data) => {
				if (data) router.push("http://localhost:3000/login");
			});
		console.log(values);
	}

	// Google Handler function
	async function handleGoogleSignin() {
		signIn("google", { callbackUrl: "http://localhost:3000" });
	}
	return (
		<Main>
			<section className="h-full">
				<div className="container h-full px-6 py-12">
					<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
						<div className="w-full p-6 m-auto bg-white border-t rounded shadow-lg border-primary/60 shadow-primary/50 lg:max-w-md">
							<h1 className="text-3xl font-semibold text-center text-primary/70">
								Create an Account
							</h1>

							<form className="mt-6" onSubmit={formik.handleSubmit}>
								<div>
									<label
										htmlFor="fullName"
										className="block text-sm text-gray-800"
									>
										Full name
									</label>
									<input
										type="text"
										name="fullName"
										className="block w-full px-4 py-2 mt-2 bg-white border rounded-md text-primary/70 focus:border-primary/40 focus:ring-primary/30 focus:outline-none focus:ring focus:ring-opacity-40"
										{...formik.getFieldProps("fullName")}
									/>
								</div>
								<div>
									<label
										htmlFor="username"
										className="block text-sm text-gray-800"
									>
										Username
									</label>
									<input
										type="text"
										name="username"
										className="block w-full px-4 py-2 mt-2 bg-white border rounded-md text-primary/70 focus:border-primary/40 focus:ring-primary/30 focus:outline-none focus:ring focus:ring-opacity-40"
										{...formik.getFieldProps("username")}
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm text-gray-800"
									>
										Email
									</label>
									<input
										type="email"
										name="email"
										className="block w-full px-4 py-2 mt-2 bg-white border rounded-md text-primary/70 focus:border-primary/40 focus:ring-primary/30 focus:outline-none focus:ring focus:ring-opacity-40"
										{...formik.getFieldProps("email")}
									/>
								</div>
								<div className="mt-4">
									<div>
										<label
											htmlFor="password"
											className="block text-sm text-gray-800"
										>
											Password
										</label>
										<input
											type="password"
											name="password"
											className="block w-full px-4 py-2 mt-2 bg-white border rounded-md text-primary/70 focus:border-primary/400 focus:ring-primary/30 focus:outline-none focus:ring focus:ring-opacity-40"
											{...formik.getFieldProps("password")}
										/>
									</div>

									<div className="mt-6">
										<button
											type="submit"
											className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-primary hover:bg-primary/600 focus:outline-none focus:bg-primary/60"
										>
											Register
										</button>
									</div>
								</div>
							</form>
							<p className="mt-8 text-sm font-light text-center text-gray-700">
								{" "}
								Already have an account?
								<Link
									href="/login"
									className="ml-2 font-medium text-primary/60 hover:underline"
								>
									Sign in
								</Link>
							</p>
						</div>
					</div>
				</div>
			</section>
		</Main>
	);
};

export default Register;
