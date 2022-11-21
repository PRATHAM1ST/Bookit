import Room from "../models/Room";
import ErrorHandler from "../utils/errorhandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";

export const allRooms = catchAsyncErrors(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({
    success: true,
    totalRooms: rooms.length,
    rooms,
  });
});

// Create new room => /api/rooms
export const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

// Get room details => /api/rooms/:id
export const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with the ID", 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// Update room details => /api/rooms/:id
export const updateRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with the ID", 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// Delete room details => /api/rooms/:id
export const deleteRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with the ID", 404));
  }

  room = await Room.findByIdAndDelete(req.query.id);

  res.status(200).json({
    success: true,
    message: "Room deleted",
  });
});
