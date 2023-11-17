import db from './connection'

import { Reputation } from '../../models/repModel'

export async function getNewRep(): Promise<Reputation[]> {
  return db('reputation').select('newRep')
}
