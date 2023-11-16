import connection from './connection'
import { Reputation } from '../../models/repModel'
import {}

//  Test functions

export async function addMessage(newMessage: MessageData): Promise<Reputation> {
  function matchPositive() {
    const string = newMessage
    const positive = string.match(/pretty|fun|/gi)
    return positive
  }

  function matchNegative() {
    const string = newMessage
    const negative = string.match(/ugly|gross|/gi)
    return negative
  }
  const scoreArr = [matchNegative() + matchPositive()]
  const messageCalculation = scoreArr.length * 5

  const dbMessage = { message: newMessage, newRep: messageCalculation }

  const [message] = await connection('reputation')
    .insert(dbMessage)
    .returning('*')

  return message
}
