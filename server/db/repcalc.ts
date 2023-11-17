import connection from './connection'
import { Reputation } from '../../models/repModel'

//  Test functions

export async function addMessage(newMessage: string): Promise<Reputation> {
  console.log(newMessage)
  function matchPositive() {
    const string = newMessage
    const positive = string.match(/pretty|fun|exciting/gi) || []
    return positive
  }

  function matchNegative() {
    const string = newMessage
    const negative = string.match(/ugly|gross|boring/gi) || []
    return negative
  }
  const scoreArr = [...matchNegative(), ...matchPositive()]
  const messageCalculation = scoreArr.length * 5

  const dbMessage = { message: newMessage, newRep: messageCalculation }

  const [message] = await connection('reputation')
    .insert(dbMessage)
    .returning('*')

  return message
}
