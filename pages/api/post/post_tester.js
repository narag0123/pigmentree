import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const db = (await connectDB).db("Pigmentree");

    // const single = await db
    //     .collection("single")
    //     .find()
    //     .toArray();
    // const bulk = await db
    //     .collection("bulk")
    //     .find()
    //     .toArray();
    // const packages = await db
    //     .collection("package")
    //     .find()
    //     .toArray();

    if (req.method === "POST") {
        try {
            await db.collection("single").updateMany(
                {
                    color: "Lemon Yellow",
                },
                {
                    $set: { code: "KT-660101" },
                }
            );

            return res.status(200).redirect("/docs/MSDS");
        } catch (error) {
            console.log(error);
        }
    }
}
