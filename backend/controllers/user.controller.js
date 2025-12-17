import User from "../model/user.model.js";

export const getCurrentUser = async (req, res) => {
  try {
    let user = await User.findById(req.userId)
      .select("-password")
      .populate(
        "listing",
        "title description rent category city landMark image1 image2 isbooked host ratings"
      )
      .populate(
        "booking",
        "title description rent category city landMark image1 image2 isbooked host ratings"
      );
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    res.status(200).json(user);

    // console.log(user.listing);
  } catch (error) {
    return res.status(500).json({ message: `getCurrentUser error ${error}` });
  }
};
