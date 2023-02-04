import connectMongo from "../../database/conn";
import Report from "../../model/Report";

export default async function handler(req, res) {
	await connectMongo().catch((error) =>
		res.json({ error: "Connection Failed...!" })
	);

	try {
		const reports = await Report.find({}).sort({ createdAt: -1 }).limit(5);

		// console.log(reports, "report");
		res.status(200).json({ status: true, reports });
	} catch (err) {
		res.status(500).json(err);
	}
}
