"use strict";

import { Response, Request, NextFunction } from "express";

/**
 * List of API examples.
 * @route GET /api
 */
export const getApi = (req: Request, res: Response) => {
    res.json({
        "name" : "Admiral Home Assignment - NodeJs Backend",
        "author": "Ramesh Kolamala"
    });
};


