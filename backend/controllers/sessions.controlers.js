import { UserModel } from "../models/user.models.js";

export const register = async (req, res) => {
    const { username, email, password, phone, address } = req.body;

    try {
        const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).send('Usuario ya registrado');
        }

        const user = await UserModel.create({ username, email, password, phone, address });

        res.status(200).send({ data: user });
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).send('Error al registrar el usuario');
    }
}
