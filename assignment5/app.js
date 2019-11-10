const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const parser = require("body-parser");
const server = express();

server.use(express.static(__dirname));
server.get("/", function(req, res) {
  res.render("index.html");
});
server.use(parser.urlencoded({ extended: false, limit: 1024 }));
server.post("/submit", function(req, res) {
  res.set({ "Content-Type": "text/html" });
  res.write("name: " + req.body.name + "<br/>");
  res.write("email: " + req.body.email + "<br/>");
  res.write("comment: " + req.body.comment + "<br/>");
  res.end();
});
server.listen(port);
