// server.js
// const http = require("http");
import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`Received ${method} request for ${url}`);

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
        `);
  }
  if (url === "/about" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("About us: at CADT, we love  node.js! ");
  } else if (url === "/contact-us" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("You can reach us vai email… ");
  } else if (url === "/products" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("Buy one get one… ");
  } else if (url === "/projects" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("Here are our awesome projects ");
  }
  // Implement more routes here
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("404 Not Found");
  }
});

server.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
