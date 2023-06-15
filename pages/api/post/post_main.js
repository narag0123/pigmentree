import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function hander(req, res) {
    const db = (await connectDB).db("Pigmentree");
    const result = await db
        .collection("main_category")
        .find()
        .toArray();

    if (req.method === "POST") {
        console.log(result);
        return res.status(200).json(result);
    }
}
