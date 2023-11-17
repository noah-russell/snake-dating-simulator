import request from 'superagent'
import { Reputation } from '../../models/repModel'

export async function sendComment(newComment: Reputation): Promise<Comment> {
  const response = await request.post('/api/v1/comments').send(newComment)
  console.log(response)
  return response.body
}
