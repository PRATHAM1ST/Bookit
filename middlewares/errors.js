import ErrorHandler from "../utils/errorhandler";

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  //Wrong mongoose obj id

  if (err.name == "CastError") {
    const message = `Resource not found. Invalid ${err.value}`;
    error = new ErrorHandler(message, 404);
  }

  //handling mongoose validation error
  if (err.name == "ValidationError") {
    const message = Object.values(err.errors).map(value => value.message);
    error = new ErrorHandler(message, 404);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
