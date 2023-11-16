import connection from './connection.ts'
import { Reputation } from '../../models/repModel'

export async function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}
//  Test functions

export async function addMessage(newMessage: MessageData): Promise<Message> {



  function matchPositive() {
    const string = newMessage
    const positive = string.match(/pretty|fun|/gi)
    return positive
  }
  matchPositive()
  const dbMessage = { message: newMessage, newRep: messageCalculation }

  const [message] = await connection('reputation')
    .insert(dbMessage)
    .returning('*')

  return message
}
