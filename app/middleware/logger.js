const logger = (req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`\n${req.method} ${req.url}\n`);
    console.log(req.body);
  }
  next();
};

module.exports = logger;
