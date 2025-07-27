import mongoose from 'mongoose';
import { MONGO_URI } from './env';
import colors from 'colors';

export const connectDB = async() => {
    try {
        
        const { connection } = await mongoose.connect( MONGO_URI );
        const { host, port } = connection;
        console.log(colors.cyan.bold(`MongoDB conectado en: ${ host }:${ port }`));
    } catch (error: unknown) {
        //! check if the value is sent
        if (error instanceof Error) {
            console.error(colors.red.bold(`Error al conectar a MongoDB: ${error.message}`));
        } else {
            console.error(colors.red.bold('Error desconocido al conectar a MongoDB'), error);
        }
        process.exit(1);
    }
}