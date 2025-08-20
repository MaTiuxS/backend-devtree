import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env';

const generateJWT = ( payload:JwtPayload ) => {
    

    const token = jwt.sign( payload, JWT_SECRET, {
        expiresIn: '180d',
    });
    return token;
}

export {
    generateJWT,
};