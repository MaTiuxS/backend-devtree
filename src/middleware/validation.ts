import type { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { nextTick } from 'process';


const handleInputErrors = ( req:Request, res:Response, next:NextFunction ) => {
    //! handle errors
    let errors = validationResult(req);
    if( !errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    next();
};

export {
    handleInputErrors,
}