const express = require("express");
const cors = require("cors");
const http = require("http");
const Router = require("./router");
const CheckWinner = require("./controllers/check_winner");

http
  .createServer(async (req, res) => {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
    });
    const router = new Router(req, res);
    router.routes();
  })
  .listen(5000);
