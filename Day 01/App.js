// create the server
const http = require('http');
const server1 = http.createServer((req, resp)=>{
    resp.setHeader('Content-Type', 'text/html');
    resp.write('<h1>Hello Team!</h1>');
    resp.end();
});
server1.listen(3000)

// calculator
const http = require("http");
const server = http.createServer((req, resp) => {
  const url = req.url;
  const method = req.method;
  if (url === "/calc") {
    resp.setHeader("Content-Type", "text/html");
    resp.write('<html lan="en">');
    resp.write("<head><title>My Calculator</title></head>");
    resp.write("<body>");
    resp.write(
      '<form method="POST" action="/add"><input type="number" name="number1"/> &nbsp <input type="number" name="number2"/> &nbsp <button type="submit">+Add</button></form>'
    );
    resp.write("</body>");
    resp.write("</html>");
    return resp.end();
  }
  if (url === "/add" && method === "POST") {
    resp.setHeader("Content-Type", "text/html");
    resp.write('<html lan="en">');
    resp.write("<head><title>My Calculator</title></head>");
    resp.write("<body>");
    resp.write("<h1>Done!</h1>");
    resp.write("</body>");
    resp.write("</html>");
    resp.end();
  }
});
server.listen(3000);
