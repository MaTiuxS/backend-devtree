import type { Request, Response } from 'express';
import User from "../models/User";
import slug from 'slug';
import { hashPassword, checkPassword } from "../utils/auth";
import { validationResult } from 'express-validator';


const createAccount = async(req: Request, res: Response) => {
    // await User.create(req.body);

    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if ( userExists ) {
        const error = new Error('Un usuario con ese email ya esta registrado')
        return res.status(409).json({error: error.message});
    }

    const handle = slug( req.body.handle, '');
    const handleExists = await User.findOne({handle});
    if (handleExists) {
        const error = new Error('El handle ya esta registrado');
        return res.status(409).json({ error: error.message });
    }

    const user = new User(req.body);
    user.password = await hashPassword( password );
    user.handle = handle;

    await user.save();

    res.status(201).send('Registro Creado correctamente');
}

const login =  async( req:Request, res:Response ) => {

    
    const { email, password } = req.body;
    
    // check if the user is registered
    const user = await User.findOne({ email });
    
    if ( !user ) {
        const error = new Error('El usuario no existe')
        return res.status(404).json({error: error.message});
    }

    // check password
    const isPasswordCorrect = await checkPassword(password, user.password);
    if ( !isPasswordCorrect ) {
        const error = new Error('El password es incorrecto');
        return res.status(401).json({ error: error.message });
    }
    res.status(200).send('Autenticado...')
    
}

export {
    createAccount,
    login,
} 