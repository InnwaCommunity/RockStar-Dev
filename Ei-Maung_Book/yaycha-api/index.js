import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/info", (req, res) => {
    res.json({ msg: "Yaycha API" });
});

app.listen(8000, () => {
    console.log("Yaycha API started at 8000...");
});