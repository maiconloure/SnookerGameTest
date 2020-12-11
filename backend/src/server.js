const express = require("express");
const cors = require("cors");
const { routes } = require("./routes");
const app = express();
const http = require("http");
const Router = require("./router");

http
  .createServer((req, res) => {
    const { headers, method, url } = req;
    console.log(method, url);
    const router = new Router(req, res, method);
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
    });
    // const data = req.on("data", (chunk) => {
    //   return chunk;
    // });

    if (method === "GET") {
      router.get(url);
    }

    if (method === "POST") {
      router.post(url);
    }

    return res.end();
  })
  .listen(5000, () => console.log("Server is running"));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
