import genToken from "../config/token.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

//signup controller
export const signUp = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    let existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({ message: "user is already exist" });
    }
    let hashPassword = await bcrypt.hash(password, 10);
    let user = await User.create({ name, email, password: hashPassword });

    let token = genToken(user._id);
    res.cookie("token", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json(user);
  } catch (error) {
   return res.status(500).json({ message: `signup error ${error}` })
  }
};

//login controller
export const logIn = async (req, res) => {
  try {
    // console.log(req.body);

    let { email, password } = req.body;

    //  console.log(email);
    //  console.log(password);

    let user = await User.findOne({ email }).populate(
      "listing",
      "title description rent category city landMark image1 image2"
    );

    if (!user) {
      return res
        .status(400)
        .json({ message: "user is not exist, please signup first" });
    }
    let isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return res.status(400).json({ message: "incorrect password" });
    }

    let token = genToken(user._id);
    res.cookie("token", token, {
      
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json(user);
  } catch (error) {
   return res.status(500).json({ message: `error in login ${error}` });
  }
};

//logout controller

export const logOut = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({ message: "logout successfullly" });
  } catch (error) {
    return res.status(500).json({ message: `logout error ${error}` });
  }
};
