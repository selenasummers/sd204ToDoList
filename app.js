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
