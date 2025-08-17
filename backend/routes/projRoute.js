import express from 'express'
import { deleteProject, getProjects, postProject } from '../controllers/projController.js'

const router = express.Router()

router.get('/',getProjects)
router.post('/',postProject)
router.delete('/:id',deleteProject)

export default router;