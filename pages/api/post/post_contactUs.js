import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const db = (await connectDB).db("Customer");
    // const result = await db
    //     .collection("main_category")
    //     .find()
    //     .toArray();

    console.log(req.body);

    if (req.method === "POST") {
        try {
            await db.collection("qna").insertOne(req.body);

            return res.status(200).redirect("/contactUs");
        } catch (error) {
            console.log(error);
        }
    }
}
