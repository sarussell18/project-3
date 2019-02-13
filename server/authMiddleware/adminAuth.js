const jwt = require('jsonwebtoken');

// This file is for authenticating an admin user to use admin functionality
module.exports = (req, res, next) =>{

  try{

    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if(decode.role === 'admin'){
      req.userDecode = decode;
      next();
    } else {
      res.status(401).json({message: 'You are not authorized for this action '});
    }

  }
  catch (error){

    res.status(401).json({message: 'auth failed ' + error.message });

  }

}
