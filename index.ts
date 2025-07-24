import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post("/api/leave-request", (req, res) => {
  console.log("Leave Request Received:", req.body);
  res.status(200).json({ message: "Leave request submitted successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
