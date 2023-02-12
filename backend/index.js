const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());


app.get("/expenses", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
  res.send(list);
});


app.post("/create", async (req, res) => {
  const data = req.body;
  await User.add(data);
  res.send({ msg: "Expense Added" });
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});


app.listen(4000, () => console.log("Up & RUnning *4000"));
