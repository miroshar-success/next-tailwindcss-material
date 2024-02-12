
import User from "../../models/User";
import { connectToDatabase } from "../../db";

export default async function getUserById(req, res) {
    const userId = req.query.id;
    if (req.method === 'GET') {
      try {
        await connectToDatabase();
        const user = await User.findById(userId);

        return res.status(200).json({ user });
      } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }
    else{
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
