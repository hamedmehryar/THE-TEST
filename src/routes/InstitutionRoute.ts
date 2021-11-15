import express, {Request, Response, Router} from 'express';
import * as InstitutionController from "../controllers/InstitutionController";
const router: Router = express.Router();

router.get('/:slug/submissions', InstitutionController.getsubmissions);
router.get('/:slug/subjects-ratings_trend', InstitutionController.getSubjects);
router.get('/:slug', InstitutionController.findOne);
router.get('/', InstitutionController.find);



export default router;

//db IDs are replaced with slugs (indexed, and unique), for front-end services URL readability.