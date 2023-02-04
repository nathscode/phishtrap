// pages/api/getColors.js
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { body } = req;
	const urlEncode = body.url;
	const options = {
		method: "GET",
		url: `https://ipqualityscore.com/api/json/url/${process.env.IPQUALITYSCOREKEY}/${urlEncode}`,
	};
	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error: any) {
		res.status(error.response.status).send(error.response.data);
	}
}
