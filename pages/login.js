import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import login_validate from "../lib/validate";
import { signIn, signOut } from "next-auth/react";
import Main from "../components/Main";

const Login = () => {
	const router = useRouter();
	// formik hook
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate: login_validate,
		onSubmit,
	});
	async function onSubmit(values) {
		const status = await signIn("credentials", {
			redirect: false,
			email: values.email,
			password: values.password,
			callbackUrl: "/",
		});

		if (status.ok) router.push(status.url);
		console.log(values.email);
	}

	// Google Handler function
	async function handleGoogleSignin() {
		signIn("google", { callbackUrl: "http://localhost:3000" });
	}
	return (
		<Main>
			<section className="h-screen">
				<div className="container h-full px-6 py-12">
					<div className="flex flex-wrap items-center justify-center h-full g-6">
						<div className="w-full p-6 m-auto bg-white border-t rounded shadow-lg border-primary/60 shadow-primary/50 lg:max-w-md">
							<h1 className="text-2xl font-semibold text-center text-primary/70">
								Login into your account
							</h1>

							<form className="mt-6" onSubmit={formik.handleSubmit}>
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
										placeholder="Email"
										className="block w-full px-4 py-2 mt-2 bg-white border rounded-md text-primary/70 focus:border-primary/40 focus:ring-primary/30 focus:outline-none focus:ring focus:ring-opacity-40"
										{...formik.getFieldProps("email")}
									/>
								</div>
								{formik.errors.email && formik.touched.email ? (
									<span className="text-rose-500">{formik.errors.email}</span>
								) : (
									<></>
								)}
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
											placeholder="password"
											className="block w-full px-4 py-2 mt-2 bg-white border rounded-md text-primary/70 focus:border-primary/400 focus:ring-primary/30 focus:outline-none focus:ring focus:ring-opacity-40"
											{...formik.getFieldProps("password")}
										/>
									</div>
									{formik.errors.password && formik.touched.password ? (
										<span className="text-rose-500">
											{formik.errors.password}
										</span>
									) : (
										<></>
									)}

									<div className="mt-6">
										<button
											type="submit"
											className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-primary hover:bg-primary/600 focus:outline-none focus:bg-primary/60"
										>
											login
										</button>
									</div>
									<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
										<p className="mx-4 mb-0 font-semibold text-center">OR</p>
									</div>
									<button
										type="button"
										onClick={handleGoogleSignin}
										className="flex items-center justify-center w-full py-3 mb-3 text-sm font-medium leading-snug text-black uppercase transition duration-150 ease-in-out border border-gray-600 rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
										href="#!"
										role="button"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
									>
										<svg
											className="w-3.5 h-3.5 mr-2"
											xmlns="http://www.w3.org/2000/svg"
											fillRule="evenodd"
											clipRule="evenodd"
											imageRendering="optimizeQuality"
											shapeRendering="geometricPrecision"
											textRendering="geometricPrecision"
											viewBox="0 0 326667 333333"
										>
											<path
												fill="#4285f4"
												d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
											/>
											<path
												fill="#34a853"
												d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
											/>
											<path
												fill="#fbbc04"
												d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
											/>
											<path
												fill="#ea4335"
												d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
											/>
										</svg>
										Continue with Google
									</button>
								</div>
							</form>
							<p className="mt-8 text-sm font-light text-center text-gray-700">
								Don't have an account yet?
								<Link
									href="/register"
									className="ml-2 font-medium text-primary/60 hover:underline"
								>
									Sign up
								</Link>
							</p>
						</div>
					</div>
				</div>
			</section>
		</Main>
	);
};

export default Login;
