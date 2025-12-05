import jwt from "jsonwebtoken";

const genToken = async (userId) => {
  try {
    console.log(userId);

    let token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log(`error in token generation ${error}`);
  }
};
export default genToken;
