const mongoose = require("mongoose");

const connectToDatabase = async() => {
    mongoose
      .connect("mongodb://localhost:27017/todolist_system", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("Connected to database");
      })
      .catch((error) => console.log(error));
  };

module.exports = {
    connect: connectToDatabase,
};