import express from "express";

import { createSkill,getSkill } from "../controller/skill.js";

const router = express.Router();

router.route('/').post(createSkill)
router.route('/').get(getSkill)

export default router