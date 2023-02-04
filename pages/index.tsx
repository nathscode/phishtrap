import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import About from "../components/About";
import { useSession } from "next-auth/react";
import Main from "../components/Main";
import SearchResult from "../components/SearchResult";
import Faqs from "../components/Faqs";

type Props = {
	reports: [Report];
};

type Report = {
	_id: String;
	email: String;
	link: String;
	safe: Boolean;
};

export default function Home() {
	// const [reports, setReports] = useState<[Report]>(props.reports);
	const [url, setUrl] = useState("");
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [searchData, setSearchData] = useState<any>(null);
	const [error, setError] = useState<string>("");

	const { data: session } = useSession();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const res = await fetch("/api/phishChecker", {
				body: JSON.stringify({
					url: encodeURIComponent(url).replace("%20", "+"),
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});
			const result = await res.json();
			if (result) {
				setSearchData(result);
				setIsLoading(false);
				console.log(result);
				e.target.reset();
			} else {
				setError(result.message);
				window.location.reload();
			}
		} catch (err) {}
	};
	return (
		<div className="relative overflow-hidden">
			<Main>
				<div className="bg-black">
					<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
						<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
							<div className="flex flex-col mb-16 sm:text-center sm:mb-0">
								<a href="/" className="mb-6 sm:mx-auto">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
										<svg
											className="w-10 h-10 text-deep-purple-900"
											stroke="currentColor"
											viewBox="0 0 52 52"
										>
											<polygon
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
												fill="none"
												points="29 13 14 29 25 29 23 39 38 23 27 23"
											/>
										</svg>
									</div>
								</a>
								<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
									<h2 className="max-w-lg mb-3 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-5xl md:mx-auto">
										Phishing URL Checker
									</h2>
									<p className="mb-6 text-2xl text-gray-300">
										Check a Link for Phishing in Seconds
									</p>
									<p className="text-base text-gray-100 md:text-lg">
										Enter a suspicious link to check for signs of phishing
									</p>
								</div>
								<div>
									<form
										className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16"
										onSubmit={handleSubmit}
									>
										<input
											placeholder="Enter URL"
											required
											type="text"
											className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 bg-transparent border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 focus:border-primary/70 focus:outline-none focus:shadow-outline"
											onChange={(e) => setUrl(e.target.value)}
										/>
										<button
											type="submit"
											value={url}
											className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto hover:text-white bg-primary/80 hover:bg-primary/90 focus:shadow-outline focus:outline-none"
										>
											Check
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
					<div className="flex flex-col items-center justify-center w-full my-5">
						<SearchResult
							isLoading={isLoading}
							data={searchData}
							urlData={url}
							session={session}
						/>
					</div>
				</div>
				{/* {reports.length === 0 ? (
					<h2>No added reports</h2>
				) : (
					<ul>
						{reports.map((report: any, i: number) => (
							<li key={i}>{report.link}</li>
						))}
					</ul>
				)} */}

				<About />
				<Faqs />
			</Main>
		</div>
	);
}

// export async function getServerSideProps(ctx: any) {
// 	// get the current environment

// 	// request posts from api
// 	let response = await fetch("http://localhost:3000/api/getReports");
// 	// extract the data
// 	let data = await response.json();

// 	return {
// 		props: {
// 			reports: data["message"],
// 		},
// 	};
// }
