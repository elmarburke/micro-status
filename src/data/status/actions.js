import sleep from 'then-sleep'

export const FETCH = 'data/status/FETCH'
export const ADD = 'data/status/ADD'

export const fetchStatus = () => ({
  type: FETCH,
  payload: sleep(1000).then(() => ({
    status: {
      all: ['s3', 's4'],
      byId: {
        s1: { _id: 's3', userId: 'u3', text: 'Ipsum lorem', time: '2017-03-13T15:52:00' },
        s2: { _id: 's4', userId: 'u4', text: 'sit doro atem', time: '2017-03-11T09:32:00' }
      }
    }
  }))
})

export const addStatus = (status) => {
  return {
    type: ADD,
    // Hier kannst du dann in der Payload ein Promise einfügen.
    // redux-promise macht die magie.
    payload: sleep(750).then(() => status)
  }
}
