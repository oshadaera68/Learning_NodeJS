const jsonWebToken = require('jsonwebtoken');


function verifyToekn(req,resp,next){
console.log(req.headers.authorization);
}
module.exports=verifyToekn;