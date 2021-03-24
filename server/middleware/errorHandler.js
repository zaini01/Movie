function errorHandler(err, req, res, next) {
  switch (err.Error) {
    case "Internal Server Error":
      res.status(500).json({ error: "Internal Server Error" });
      break;
    case "Not Found":
      res.status(404).json({ error: "Not Found" });
      break;
    default:
      res.status(500).json({ error: "Internal Server Error" });
      console.log(err);
      break;
  }
}

module.exports = errorHandler;
