const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3001;

// ✅ Allow requests from your React dev server
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.post("/save", (req, res) => {
  const data = req.body;
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
  res.json({ message: "Data saved to data.json" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
