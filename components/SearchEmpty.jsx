import { useState, useEffect } from "react";
import moment from "moment";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SearchEmpty = () => {
	const { data, error } = useSWR("/api/getReports", fetcher);
	const { reports } = data || {};
	console.log(data?.reports[0]);
	// console.log(reports);
	// const reports = [{ id: "nice", email: "frs@n.com" }];

	const convertDate = (date) => {
		const dateFmt = moment(date);
		return dateFmt.format("DD/MM/YY HH:mm");
	};
	return (
		<article className="w-full sm:w-[980px] rounded-lg border border-gray-100 p-4 shadow-sm transition sm:p-6">
			<h2 className="mb-5 text-2xl text-black border-b border-gray-700">
				Reported Phishing Links
			</h2>
			<div className="relative overflow-x-auto">
				<table className="w-full text-base text-left text-gray-600">
					<thead className="text-xs text-white uppercase bg-black bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								Url
							</th>
							<th scope="col" className="px-6 py-3">
								Date
							</th>
							<th scope="col" className="px-6 py-3">
								Status
							</th>
						</tr>
					</thead>

					<tbody>
						{reports?.map((item) => (
							<tr key={item._id} className="text-black bg-white border-b">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap"
								>
									{item.link}
								</th>
								<td className="px-6 py-4">{convertDate(item.createdAt)}</td>
								<td className="px-6 py-4">
									{item.safe === false ? "PHISHING" : "SAFE"}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</article>
	);
};

export default SearchEmpty;
