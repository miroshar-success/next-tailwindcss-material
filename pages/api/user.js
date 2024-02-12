import User from "../../models/User";
import { connectToDatabase } from "../../db";

export default async function getUsers(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToDatabase();
      const { query } = req.query;
      const users = await User.find({
        $or: [
          { email: { $regex: new RegExp(query, "i") } }, // Case-insensitive regex search for email
          { date: { $regex: new RegExp(query, "i") } }, // Case-insensitive regex search for date
          { role: { $regex: new RegExp(query, "i") } }, // Case-insensitive regex search for role
        ],
      })
      .sort({ date: -1 }) // Sort by date in descending order
      .limit(6); // Limit the result to 6 documents

      return res.status(200).json({ users });
    } catch (error) {
      console.error('Error fetching users:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
