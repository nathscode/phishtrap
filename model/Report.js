import { Schema, model, models } from "mongoose";

const reportSchema = new Schema({
	email: String,
	link: String,
	safe: Boolean,
	createdAt: { type: Date, default: Date.now },
});

const Reports = models.report || model("report", reportSchema);

export default Reports;
