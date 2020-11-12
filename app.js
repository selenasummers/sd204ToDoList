const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { urlencoded } = require('body-parser');
urlEncodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'src')));
app.set("view engine", "ejs");

let values = [{}];

app.get("/home", (request, respond) => {
    respond.send("Home Page");
});

app.get("/", (request, respond) => {
    respond.render("index", { data: values });
});

app.post("/delete", urlEncodedParser, (request, respond) => {
    let{id} = request.body
    values.splice(id, 1)
    respond.redirect("/");
});

app.get("/test", (request, respond) => {
    respond.render("Test Page");
});

app.post("/post", urlEncodedParser, (request, respond) => {
    values.push(request.body);
    respond.redirect("/");
});

app.get("/about", (request, respond) => {
    respond.send("About Page");
});

app.get("*", (request, respond) => {
    respond.send("404 Page");
});

app.listen(1485);