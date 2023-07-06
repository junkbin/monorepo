import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

export const readOnePracticeDocument = async () => {
  const client = new MongoClient(uri);

  const usersColl = client.db("practice").collection("users");

  let resultDoc = await usersColl.findOne();
  console.log(resultDoc);

  client.close();
};

export const saveOnePracticeDocument = async () => {
  const client = new MongoClient(uri);
  const usersColl = client.db("practice").collection("users");

  let newDocument = { username: "delhi" };
  let resultDoc = await usersColl.insertOne(newDocument);
  console.log(resultDoc);

  client.close();
};
