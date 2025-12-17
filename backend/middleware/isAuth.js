import  jwt  from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    console.log("this is tocken from isAuth middleware",token);

   


    
    if (!token) {
      return res.status(400).json({ message: "token not found" });
    }

    let verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
    

    if (!verifyToken) {
     return res.status(400).json({ message: "token verification is faild" });
    }
    req.userId = verifyToken.userId;
    next();
  } catch (error) {
     return res.status(500).json({ message: `isAuth error ${error}` });
  }
};

export default isAuth;
