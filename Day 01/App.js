// create the server
/* const http = require('http');
const server1 = http.createServer((req, resp)=>{
    resp.setHeader('Content-Type', 'text/html');
    resp.write('<h1>Hello Team!</h1>');
    resp.end();
});
server1.listen(3000) */

// calculator
/* const http = require("http");
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
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const requestData = Buffer.concat(body).toString().split("&");
      const num1 = Number.parseInt(requestData[0].split("=")[1]);
      const num2 = Number.parseInt(requestData[1].split("=")[1]);
      console.log(num1, num2);
      resp.setHeader("Content-Type", "text/html");
      resp.write('<html lan="en">');
      resp.write("<head><title>My Calculator</title></head>");
      resp.write("<body>");
      resp.write(`<h1>${num1 + num2}</h1>`);
      resp.write("</body>");
      resp.write("</html>");
      resp.end();
    });
  }
});
server.listen(3000); */

// day 2 code
/* const http = require("http");
const server = http.createServer((req, resp) => {
  resp.setHeader("Content-Type", "text/html");
  resp.write('<html lan="en">');
  resp.write("<head><title>My Calculator</title></head>");
  resp.write("<body>");
  resp.write("<h1>Hello Node JS</h1>");
  resp.write("</body>");
  resp.write("</html>");
  return resp.end();
});
server.listen(3000);
 */

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { encode } = require('punycode');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/new-customer-form',(req,res,next)=>{
    res.send(`
        <html lang="en">
            <head>
                <title>Customer Form</title>
            </head>
            <body>
                <form action="/save-customer" method="POST">
                    <input type="text" name="nic" placeholder="Nic"/> &nbsp 
                    <input type="text" name="name" placeholder="Name"/> &nbsp 
                    <input type="text" name="address" placeholder="Address"/> &nbsp 
                    <input type="number" name="salary" placeholder="Salary"/> &nbsp 
                    <input type="submit" value="Save Customer"/>
                </form>
            </body>
        </html>
    `)
});

app.post('/save-customer',(req,res,next)=>{
    console.log(req.body);
    console.log('Customer Saved!');
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Customer Saved...</h1>');
});

const server = http.createServer(app);
server.listen(3000);