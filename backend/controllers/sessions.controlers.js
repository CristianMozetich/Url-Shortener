import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
    try {
        if (!req.user) {
            console.log('Usuario existente');
            return res.status(400).json({ mensaje: 'Usuario existente' });
        }
        

        console.log('Usuario creado');
        res.status(200).json({ mensaje: 'Usuario creado' });
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ mensaje: `Error al registrar usuario ${error}` });
    }
};

export const login = async (req, res) => {
    try {
        const token = generateToken(req.user)

        console.log('Login exitoso');
        res.status(200).json({ mensaje: 'Login exitoso', token: token });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ mensaje: `Error al iniciar sesión ${error}` });
    }
}

export const logout = async (req,res)=>{
    if(req.session.login){
        req.session.destroy()
    }
    res.clearCookie('jwtCookie')
    res.status(200).send({resultado: 'Usuario deslogueado'})
}


