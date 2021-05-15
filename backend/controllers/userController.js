import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

//--------=== @desc Auth user and get token ===--------\\
//--------=== @route POST api/users/login ===--------\\
//--------=== @access Public  ===--------\\
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // --== validating Email ==--\\
  const user = await User.findOne({ email });
  // --== checking password + Email ==--\\
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.admin,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { authUser };