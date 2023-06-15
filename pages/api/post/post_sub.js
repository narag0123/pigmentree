export default function hander(req, res) {
    console.log("sub");

    if (req.method === "POST") {
        res.status(200).json("sub 처리완료");
    }
}
