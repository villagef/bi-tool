const express = require("express");
const jsonfile = require("jsonfile");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();
const PORT = 8080;
const DATABASE_NAME = "data.json";

app.use(cors());
app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ limit: "1000mb" }));

// Endpoint GET
app.get("/api", async (req, res) => {
  try {
    const data = await jsonfile.readFile(DATABASE_NAME);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server failed!");
  }
});

// Endpoint GET by ID
app.get("/api/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await jsonfile.readFile(DATABASE_NAME);
    const element = data.find((elem) => elem.id === id);
    if (!element) {
      return res.status(404).send("Element not found!");
    }
    res.send({
      name: element.name,
      columns: element.columns,
      data: element.data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server failed!");
  }
});

// Endpoint POST
app.post("/api", async (req, res) => {
  const newData = req.body;
  const newObject = {
    id: uuid(),
    uploadDate: new Date(),
    ...newData,
  };
  try {
    const data = await jsonfile.readFile(DATABASE_NAME);
    data.push(newObject);
    await jsonfile.writeFile(DATABASE_NAME, data);
    res.send("Data has been saved successfuly!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server failed!");
  }
});

app.listen(PORT, () => console.log(`Server works on port ${PORT}`));
