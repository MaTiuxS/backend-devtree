import 'dotenv/config';


const getEnv = (key:string):string => {
    const value = process.env[key];
    if (!value) throw new Error(`Variable de entorno ${key} no está definida.`);
    return value;
}

export const MONGO_URI = getEnv('MONGO_URI');   