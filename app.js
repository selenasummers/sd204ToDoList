const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

const database = require("./services/database");
const TaskRouter = require("./routes/tasks");

app.set('view engine','ejs')
app.use('/static', express.static(path.join(__dirname, 'src')))
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

database.connect();
app.use("/api/todolist", TaskRouter);

app.listen(1485, console.log("Server running on port 1485"));