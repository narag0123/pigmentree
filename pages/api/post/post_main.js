import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const db = (await connectDB).db("Pigmentree");
    const result = await db
        .collection("main_category")
        .find()
        .toArray();

    if (req.method === "POST") {
        console.log(result);
        return; // 리디렉션 처리
    }
}
