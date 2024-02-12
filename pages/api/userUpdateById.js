import User from "../../models/User";
import { connectToDatabase } from "../../db";

export default async function updateUserById(req, res) {
  const userId = req.query.id;
  if (req.method === "PUT") {
    try {
      await connectToDatabase();
      const updatedUser = await User.findByIdAndUpdate(userId, req.body);

      return res.status(200).json({
        message: "Successfully updated.",
        updatedUser: updatedUser
    });
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
