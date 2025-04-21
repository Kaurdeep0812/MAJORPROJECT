/** @format */

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL =
  "mongodb+srv://Sigma-Student:nshjsn137jsj@cluster0.a7xgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

// const initDB = async ()=>{
//   await Listing.deleteMany({});
// }

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6801287bf6f1bfb3096da45d",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was Initialized");
};

initDB();
