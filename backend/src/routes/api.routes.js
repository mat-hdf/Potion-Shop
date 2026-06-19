import express from 'express'
import potionController from '../controllers/potion.controller.js'

const router = express.Router()

router.get('/potions', potionController.findAll)
router.get('/potions/:id', potionController.findByPk)
router.delete('/potions/:id', potionController.deleteByPk)
router.post('/potions', potionController.create)


export default router