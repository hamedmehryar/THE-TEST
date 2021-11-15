import { Router, Response, Request } from "express";
import { NextFunction } from "express-serve-static-core";
import InstitutionRoute from "./InstitutionRoute";

const router = Router();

router.use("/institutions", InstitutionRoute);

router.use("/", (req: Request, res: Response, next: NextFunction) => {

    res.status(200).send("API Working");

});

export default router;