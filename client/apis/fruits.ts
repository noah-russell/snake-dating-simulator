import request from 'superagent'

const rootUrl = '/home'

export function getReputation(): Promise<string[]> {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.reputation
  })
}
