export default function hander(req, res) {
    console.log("mid");

    if (req.method === "POST") {
        res.status(200).json("mid 처리완료");
    }
}
