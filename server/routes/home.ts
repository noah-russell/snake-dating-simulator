import { Router } from 'express'
import { getNewRep } from '../db/db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const newRep = await db.getNewRep()

    res.json({ newRep })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
