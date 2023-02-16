const mongoose = require("mongoose");
const { urlDb } = require("../config");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL);

mongoose.connect(urlDb, {
  useUnifiedTopology: true,
  //   useFindAndModify: true,
  //   useCreateIndex: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

module.exports = db;
