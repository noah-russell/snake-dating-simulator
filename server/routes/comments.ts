import { Router } from 'express'
import { Reputation } from '../../models/repModel'
import connection from '../db/connection'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const newMessage = req.body.newComment as Reputation
    if (!newMessage) {
      res.sendStatus(400)
      return
    }
    const message = await connection.addMessage(newMessage)
    console.log(message)
    res.json({ message })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})
export default router
