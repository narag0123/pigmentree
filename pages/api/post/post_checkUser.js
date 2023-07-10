// import { connectDB } from "@/app/util/database";
// import { ObjectId } from "mongodb";

// export default async function handler(req, res) {
//     const db = (await connectDB).db("Customer");
//     const parsed = JSON.parse(req.body);

//     const result = await db
//         .collection("adminUser")
//         .findOne({
//             email: parsed.email,
//         });

//     if (req.method === "POST") {
//         try {
//             const newBody = {
//                 ...parsed,
//                 admin: "user",
//             };

//             if (result === null || undefined) {
//                 // console.log("가입 되었습니다.");
//                 // await db
//                 //     .collection("adminUser")
//                 //     .insertOne(newBody);
//             }

//             return res.status(200).redirect("/admin");
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
