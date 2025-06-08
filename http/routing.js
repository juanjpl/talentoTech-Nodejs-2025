const http = require("http");
const fs = require("fs");
const PORT = 5000;
//console.log(http)

const config = (req, res) => {
  let html = "";

  switch (req.url) {
    case "/":
      html = fs.readFileSync("./index.html", "utf-8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(html);
      break;
    case "/nosotros":
      html = fs.readFileSync("./nosotros.html", "utf-8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(html);
      break;
    case "/api":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          nombre: "Juan",
          apellido: "While",
        })
      );
      break;

    default:
      html = fs.readFileSync("./404.html", "utf-8");
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(html);
      break;
  }
};

const server = http.createServer(config);

//listener
server.listen(PORT, () => {
  console.log(`Servidor corriendo el puerto ${PORT}`);
});
