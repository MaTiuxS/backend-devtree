import { Router } from "express";

const router = Router();

// Routing
//? authentication and registration
router.post('/auth/register', (req, res) => {
    console.log(req.body.handle);
});


export default router;