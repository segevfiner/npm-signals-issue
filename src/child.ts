import http from "http";

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/plain" });
    resp.write('Hello, World!');
    resp.end();
  });

server.listen(3030);

process.on("SIGTERM", () => {
  console.log("SIGTERM");
  server.close();
});

process.on("SIGINT", () => {
  console.log("SIGINT");
  server.close();
});
