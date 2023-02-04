import Link from "next/link";
import { useState } from "react";
import { getSession, useSession, signOut } from "next-auth/react";

const SignInLink = () => {
	return (
		<ul className="items-center hidden space-x-8 sm:flex">
			<li>
				<Link
					href="/login"
					className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400"
				>
					Sign in
				</Link>
			</li>
			<li>
				<Link href="/register" legacyBehavior>
					<a
						className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-primary/70 focus:shadow-outline focus:outline-none"
						aria-label="Sign up"
						title="Sign up"
					>
						Sign up
					</a>
				</Link>
			</li>
		</ul>
	);
};
const SignOutLink = ({ session, handleSignOut }: any) => {
	return (
		<ul className="items-center hidden space-x-8 sm:flex">
			<li>
				<span>Welcome {session.user.email}</span>
			</li>
			<li>
				<Link href="/register" legacyBehavior>
					<button
						onClick={handleSignOut}
						type="button"
						className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-primary/70 focus:shadow-outline focus:outline-none"
						aria-label="Sign out"
						title="Sign out"
					>
						Sign Out
					</button>
				</Link>
			</li>
		</ul>
	);
};

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { data: session } = useSession();
	function handleSignOut() {
		signOut();
	}

	return (
		<div className="bg-white border-b border-gray-400">
			<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative flex items-center justify-between">
					<div className="flex items-center">
						<Link href="/" legacyBehavior>
							<a
								aria-label="Company"
								title="Company"
								className="inline-flex items-center mr-8"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 text-primary"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
									/>
								</svg>
								<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
									Phishtrap
								</span>
							</a>
						</Link>
						<ul className="items-center hidden space-x-8 sm:flex">
							<li>
								<a
									href="#"
									aria-label="Faqs"
									title="Faqs"
									className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400"
								>
									Faqs
								</a>
							</li>

							<li>
								<a
									href="#"
									aria-label="About us"
									title="About us"
									className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400"
								>
									About us
								</a>
							</li>
						</ul>
					</div>
					{session ? (
						<SignOutLink session={session} handleSignOut={handleSignOut} />
					) : (
						<SignInLink />
					)}

					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
							onClick={() => setIsMenuOpen(true)}
						>
							<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className="absolute top-0 left-0 z-40 w-full">
								<div className="p-5 bg-white border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<Link href="/" legacyBehavior>
												<a
													aria-label="Company"
													title="Company"
													className="inline-flex items-center mr-8"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-6 h-6 text-primary"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
														/>
													</svg>
													<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
														Phishtrap
													</span>
												</a>
											</Link>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}
											>
												<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className="items-center space-y-4">
											<li>
												<a
													href="#"
													aria-label="Faqs"
													title="Faqs"
													className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-primary"
												>
													Faqs
												</a>
											</li>

											<li>
												<a
													href="#"
													aria-label="About us"
													title="About us"
													className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-primary"
												>
													About us
												</a>
											</li>
										</ul>
										<ul className="space-y-4">
											{session ? (
												<SignOutLink
													session={session}
													handleSignOut={handleSignOut}
												/>
											) : (
												<SignInLink />
											)}
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Nav;
