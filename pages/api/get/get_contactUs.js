import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const db = (await connectDB).db("Customer");

    if (req.method === "GET") {
        const qnaList = await db
            .collection("qna")
            .find()
            .toArray();

        return res.status(200).json(qnaList);
    }
}
