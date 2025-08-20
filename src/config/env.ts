import 'dotenv/config';


const getEnv = (key:string):string => {
    const value = process.env[key];
    if (!value) throw new Error(`Variable de entorno ${key} no está definida.`);
    return value;
}

const MONGO_URI = getEnv('MONGO_URI');   

const JWT_SECRET = getEnv('JWT_SECRET');

export {    
    MONGO_URI,
    JWT_SECRET,
}