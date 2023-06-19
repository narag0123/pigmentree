import React from "react";
import Sort from "./sort/sort";
import { connectDB } from "../util/database";

export default async function Product() {
    const db = (await connectDB).db("Pigmentree");
    const single = await db
        .collection("single")
        .find()
        .toArray();
    const sample = await db
        .collection("sample")
        .find()
        .toArray();
    const packages = await db
        .collection("package")
        .find()
        .toArray();

    return (
        <div className="product min-h-[100vh]">
            <Sort
                single={JSON.parse(JSON.stringify(single))}
                sample={JSON.parse(JSON.stringify(sample))}
                packages={JSON.parse(
                    JSON.stringify(packages)
                )}
            />
        </div>
    );
}
