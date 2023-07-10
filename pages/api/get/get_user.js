import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const db = (await connectDB).db("Customer");

    if (req.method === "GET") {
        const adminUser = await db
            .collection("adminUser")
            .findOne({ email: req.query.email });

        console.log(adminUser);
        console.log(req.query.email);

        return res.status(200).json(adminUser);
        // return res.status(200).json();
    }
}
