// pages/api/login.js
import { connectToDatabase } from '../../db';
import User from '../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        try {
            // Establish connection to MongoDB
            const { db } = await connectToDatabase();

            // Find the user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }

            // Compare the provided password with the hashed password stored in the database
            console.log(password);
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            return res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            console.error('Error logging in:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
}
