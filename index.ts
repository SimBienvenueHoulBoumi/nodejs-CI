import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();

let app = express();
let port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
