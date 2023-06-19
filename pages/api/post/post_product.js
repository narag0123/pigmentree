import { connectDB } from "@/app/util/database";

export default async function hander(req, res) {
    const db = (await connectDB).db("Pigmentree");
    const single = await db
        .collection("single")
        .find()
        .toArray();

    if (req.method === "POST") {
        // await db.collection("single").updateMany(
        //     {
        //         color: "Luster Purple",
        //     },
        //     {
        //         $set: {
        //             detail: "Misteria Purple",
        //         },
        //     }
        // );

        return res.status(200);
    }
}
