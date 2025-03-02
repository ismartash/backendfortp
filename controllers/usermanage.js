import user from "../model/user.js";
export const registerash=async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newUser = new user({ name, email, password });
        await newUser.save();

        return res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }};
    export default registerash;