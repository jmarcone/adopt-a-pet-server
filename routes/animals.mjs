import { Router } from 'express';
import { getAnimalType, getSinglePet } from "../controllers/animals.mjs";

const router = Router();

router.route("/animals/:pet_type").get(getAnimalType);

router.route("/animals/:pet_type/:pet_id").get(getSinglePet);

export default router;