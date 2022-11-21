import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((e) => console.log("connected to mongodb"));
};

export default dbConnect;
