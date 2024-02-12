import User from "../../models/User";
import { connectToDatabase } from "../../db";

export default async function deleteUserById(req, res) {
  const userId = req.query.id;
  if (req.method === "DELETE") {
    try {
      await connectToDatabase();
      const deletedUser = await User.findByIdAndDelete(userId);

      return res.status(200).json({
        message: "Successfully deleted.",
    });
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
