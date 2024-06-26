import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  console.log(method, url);
  if (method === "GET" && "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && "/users") {
    users.push({
      id: "1",
      name: "John Doe",
      email: "johndoe@example.com",
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end("Not Found");
});

server.listen(3333);
