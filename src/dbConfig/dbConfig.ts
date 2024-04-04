import { log } from "console";
import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!); // ! this added to make sure typescript that string will be provided
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error,please make sure DB is up and running" + err
      );
      process.exit();
    });
  } catch (err) {
    console.log("Something went wrong in connecting to DB");
    console.log(err);
  }
}
