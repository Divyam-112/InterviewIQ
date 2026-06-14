const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${new Date().toISOString()} — ${err.message}`);
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.isOperational
    ? err.message
    : "Something went wrong. Please try again.";

  res.status(statusCode).json({ message });
};

export default errorHandler;
