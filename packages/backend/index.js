import express from "express";
import { saveOnePracticeDocument } from "dbmod";
import { readOnePracticeDocument } from "dbmod";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/practice/save", saveOnePracticeDocument);
app.get("/practice/readon", readOnePracticeDocument);

app.listen(3000, () => console.log("Application Started..."));
