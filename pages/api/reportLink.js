import connectMongo from "../../database/conn";
import Report from "../../model/Report";

export default async function handler(req, res) {
	await connectMongo().catch((error) =>
		res.json({ error: "Connection Failed...!" })
	);

	// only post method is accepted
	if (req.method === "POST") {
		if (!req.body)
			return res.status(404).json({ error: "Don't have form data...!" });
		const { email, link, safe } = req.body;

		// check duplicate users
		const checkexisting = await Report.findOne({ link });
		if (checkexisting)
			return res.status(422).json({ message: "Link Already Exists...!" });

		// hash password
		Report.create({ email, link, safe }, function (err, data) {
			if (err) return res.status(404).json({ err });
			// console.log(data);
			res.status(201).json({ status: true, user: data });
		});
	} else {
		res
			.status(500)
			.json({ message: "HTTP method not valid only POST Accepted" });
	}
}
