const express = require("express");
const jsonfile = require("jsonfile");
const cors = require("cors");

const app = express();
const PORT = 8080;
const FILE_NAME = "data.json";

app.use(cors());
app.use(express.json());

// Endpoint GET, zwracający wszystkie dane
app.get("/api", async (req, res) => {
  try {
    const data = await jsonfile.readFile(FILE_NAME);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Błąd serwera");
  }
});

// Endpoint POST, zapisujący dane
app.post("/api", async (req, res) => {
  const newData = req.body;
  try {
    const data = await jsonfile.readFile(FILE_NAME);
    data.push(newData);
    await jsonfile.writeFile(FILE_NAME, data);
    res.send("Dane zostały zapisane");
  } catch (err) {
    console.log(err);
    res.status(500).send("Błąd serwera");
  }
});

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
