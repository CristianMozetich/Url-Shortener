import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (user) => {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log(token)
    return token
}
