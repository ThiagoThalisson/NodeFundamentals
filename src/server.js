import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  console.log(method, url);
  if (method === "GET" && "/users") {
    return res.end("Listagem de usuários");
  }

  if (method === "POST" && "/users") {
    return res.end("Criação de usuário");
  }

  return res.end("Hello World");
});

server.listen(3333);
