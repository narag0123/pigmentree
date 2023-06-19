import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const db = (await connectDB).db("Pigmentree");
    const single = await db
        .collection("single")
        .find()
        .toArray();

    if (req.method === "POST") {
        console.log(single);

        return res.status(200).json(single);
    }
}
