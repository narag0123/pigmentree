export default function hander(req, res) {
    console.log("product");

    if (req.method === "POST") {
        res.status(200).json("product mid 처리완료");
    }
}
