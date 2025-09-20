const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3001;

// ✅ Allow requests from your React dev server
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.post("/save", (req, res) => {
    let data = [];

  // Read existing data if the file already exists
  if (fs.existsSync("data.json")) {
    try {
      const fileContent = fs.readFileSync("data.json", "utf8");
      if (fileContent.trim()) {
        data = JSON.parse(fileContent);
      }
    } catch (err) {
      console.error("Error reading/parsing file:", err);
    }
  }
  // Add the new entry
  data.push(req.body);

  // Write back formatted JSON
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2), "utf8");
  res.json({ message: "Data saved to data.json" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
