const jwt = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          return res.json({
            message: "Invalid Token..."
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        message: "Access Denied! Unauthorized User"
      });
    }
  },
  rolcheckdoc:(req,res,next)=>{
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token,process.env.JWT_KEY, (err, decoded) => {
         if (err) {
          return res.json({
            message: "Invalid Token..."
          });
        }else{
          const rol = decoded.result.rol;
          if(rol == 2){
           return res.json({
        message: "Access Denied! "
      });

          }else{
            req.decoded = decoded;
            next();
          }
        }

      });
    }else {
      return res.json({
        message: "Access Denied! Unauthorized User"
      });
    }
  }
};