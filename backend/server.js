const express = require("express");
const mongoose = require("mongoose");

async function startServer() {
  const app = express();

  const uri = "mongodb+srv://beyondfinds2023:marketplace2023@cluster0.iil9f3d.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("DB has connected Successfully");
  app.listen(8080, () => {
    console.log("App is running at port 8080!!!");
  });
}

startServer();
