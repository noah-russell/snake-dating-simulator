import { Router } from 'express'

import * as db from '../db/reputation.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const reputation = await db.getCurrentRep()

    res.json({ fruits: fruits.map((fruit) => fruit.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
