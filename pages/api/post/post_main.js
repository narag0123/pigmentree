import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function hander(req, res) {
    const db = (await connectDB).db("pigmentree");
    const result = await db
        .collection("main_category")
        .find()
        .toArray();

    if (req.method === "POST") {
        return res.status(200).json(result);
    }
}
