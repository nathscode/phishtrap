import { useState } from "react";
import { useRouter } from "next/router";
import Loader from "./Loader";
import SearchEmpty from "./SearchEmpty";

const SearchResult = ({ data, urlData, session, isLoading }: any) => {
	const url = data?.domain;
	const safe = data?.unsafe ? true : false;
	const router = useRouter();
	const linkData = {
		email: session?.user.email,
		link: urlData,
		safe: safe,
	};

	async function onSubmit(linkData: any) {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(linkData),
		};

		await fetch("http://localhost:3000/api/reportLink", options)
			.then((res) => res.json())
			.then((data) => {
				if (data) router.push("http://localhost:3000");
			});
		console.log(url);
	}
	if (!data) {
		return <SearchEmpty />;
	}
	if (isLoading) {
		return <Loader />;
	}
	return (
		<article className="w-[980px] rounded-lg border border-gray-100 p-4 shadow-sm transition sm:p-6">
			<h2 className="text-2xl text-black border-b border-gray-700">
				Phishing URL Checker
			</h2>
			{data && (
				<div className="flex flex-col my-5">
					<div className="mb-3">
						<span className="inline-flex">
							<strong className="inline-flex mr-3">Status:</strong>
							<span
								className={`${
									data.unsafe ? "bg-[#dc2626]" : "bg-[#0E9F6E]"
								} text-xs inline-block py-1 px-2.5  leading-6 text-center whitespace-nowrap align-baseline font-bold  text-white rounded-full`}
							>
								{data.unsafe ? "Unsafe" : "Safe"}
							</span>
						</span>
					</div>
					<div className="mb-3">
						<span className="inline-flex">
							<strong className="inline-flex mr-3">Suspicious:</strong>
							<span
								className={`${
									data.suspicious ? "text-[#dc2626]" : "text-[#0E9F6E]"
								} font-bold`}
							>
								{data.suspicious ? "Suspicious link" : "No issues"}
							</span>
						</span>
					</div>
					<div className="mb-3">
						<span className="inline-flex">
							<strong className="inline-flex mr-3">Url:</strong>
							<span className="text-lg text-black">{urlData}</span>
						</span>
					</div>
					<div className="mb-3">
						<span className="inline-flex">
							<strong className="inline-flex mr-3">Domain:</strong>
							<span className="text-lg text-black">{data.domain}</span>
						</span>
					</div>
					<div className="mb-3">
						<span className="inline-flex">
							<strong className="inline-flex mr-3">IP address:</strong>
							<span className="text-lg text-black">{data.ip_address}</span>
						</span>
					</div>
					<div className="mb-3">
						<span className="inline-flex">
							<strong className="inline-flex mr-3">Risk Score:</strong>
							{data.risk_score <= 60 ? (
								<span className="text-lg text-[#0E9F6E]">
									{data.risk_score} Low Risk
								</span>
							) : (
								<span className="text-lg text-[#C81E1E]">
									{data.risk_score} High Risk
								</span>
							)}
						</span>
					</div>

					<div className="mb-3">
						{data.suspicious && session.user.email && (
							<button
								onClick={() => onSubmit(linkData)}
								type="button"
								className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-primary/70 focus:shadow-outline focus:outline-none"
							>
								Report link
							</button>
						)}
					</div>
				</div>
			)}
		</article>
	);
};

export default SearchResult;
