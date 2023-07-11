import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const db = (await connectDB).db("Pigmentree");

    if (req.method === "GET") {
        const single = await db
            .collection("single")
            .find()
            .toArray();
        const bulk = await db
            .collection("bulk")
            .find()
            .toArray();
        const packages = await db
            .collection("package")
            .find()
            .toArray();

        const products = [...single, ...bulk, ...packages];
        const filterProducts = products.filter(
            (e) => e.weight === 10
        );
        const newProducts = [...new Set(filterProducts)];

        // const newProducts = [...new Set(products)];

        return res.status(200).json(newProducts);
    }
}
