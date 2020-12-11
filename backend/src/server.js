const express = require("express");
const cors = require("cors");
const http = require("http");
const Router = require("./router");

http
  .createServer((req, res) => {
    const { method } = req;
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
    });

    const router = new Router(req, res, method);
    if (method === "GET") {
      router.get();
    } else if (method === "POST") {
      router.post();
    } else if (method === "PUT") {
      router.put();
    }
  })
  .listen(5000, () => console.log("Server is running"));
