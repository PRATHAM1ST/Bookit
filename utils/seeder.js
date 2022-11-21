const Room = require("../models/Room");
const mongoose = require("mongoose");
const rooms = require("../data/rooms");

mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((e) => console.log("connected to mongodb"));

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All rooms are added");
  } catch (e) {
    console.log(e.message);
    process.exit();
  }
};

seedRooms();
