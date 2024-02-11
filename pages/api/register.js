// pages/api/register.js
import { connectToDatabase } from '../../db';
import User from '../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        const { db } = await connectToDatabase();
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists', status:'400'});
        }

        // Insert the new user into the database
        try {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

            // Create a new user document with the hashed password
            const user = new User({ email, password: hashedPassword, role: 'user' });
            await user.save();

            return res.status(201).json({ message: 'User registered successfully', status: '201' });
        } catch (error) {
            console.error('Error registering user:', error);
            return res.status(500).json({ message: 'Internal Server Error', status: '500' });
        }
    }

    return res.status(405).json({ message: 'Method Not Allowed', status: '405' });
}
