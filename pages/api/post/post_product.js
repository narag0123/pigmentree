import { connectDB } from "@/app/util/database";

export default async function hander(req, res) {
    const db = (await connectDB).db("Pigmentree");
    const single = await db
        .collection("single")
        .find()
        .toArray();

    if (req.method === "POST") {
        return res
            .status(200)
            .redirect("/admin/addProduct");
    }
}
