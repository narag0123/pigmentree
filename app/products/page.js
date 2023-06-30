import React from "react";
import Sort from "./sort/sort";
import { connectDB } from "../util/database";

export default async function Product() {
    const db = (await connectDB).db("Pigmentree");
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

    return (
        <div className="product min-h-[100vh]">
            <Sort
                single={JSON.parse(JSON.stringify(single))}
                bulk={JSON.parse(JSON.stringify(bulk))}
                packages={JSON.parse(
                    JSON.stringify(packages)
                )}
            />
        </div>
    );
}
