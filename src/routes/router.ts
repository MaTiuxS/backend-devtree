import { Router } from "express";
import User from "../models/User";

const router = Router();

// Routing
//? authentication and registration
router.post('/auth/register', async(req, res) => {
    // await User.create(req.body);
    const user = new User(req.body);

    await user.save();

    res.status(200).send('Registro Creado correctamente');
});


export default router;