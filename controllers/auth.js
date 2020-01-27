const jwt = require("jsonwebtoken");
const expressJwt = require('express-jwt');

exports.tokenAuth = async (req, res) => {
  const token = jwt.sign('result', process.env.JWT_SECRET)
  
            // const token = jwt.sign(result, process.env.JWT_SECRET)
            // res.cookie('t', token, { expire: new Date() + 9999 })
            // return res.json({ token, user: 'sasee' });
    
    //console.log(username)

}

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
})