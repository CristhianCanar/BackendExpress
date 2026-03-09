import { Request, Response } from "express";
import { AuthRequest } from "../models/auth-request.model";
import jwt = require('jsonwebtoken');


const USER = {
  username: 'admin',
  password: '123456'
};

export const login = async (
    req: Request<AuthRequest>,
    res: Response
) => {
    const { username, password } = req.body;

    if (username !== USER.username || password !== USER.password) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
        { username },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
    );

    return res.json({
        message: 'Login exitoso',
        token
    });
    
};