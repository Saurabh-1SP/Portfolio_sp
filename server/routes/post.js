import express from 'express'

import { createProjects, getAllProjects,getProjectDetail ,updateProject} from '../controller/post.js'

const router  = express.Router();

router.route('/').post(createProjects)
router.route('/').get(getAllProjects)
router.route('/:id').get(getProjectDetail)
router.route('/:id').patch(updateProject)

export default router