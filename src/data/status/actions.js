import sleep from 'then-sleep'

export const FETCH_LIST = 'data/status/FETCH_LIST'
export const FETCH_ITEM = 'data/status/FETCH_ITEM'
export const ADD = 'data/status/ADD'

const data = [
  // Auch hier kannst du dich austoben. Sollte die PouchDB magie hier zu aufwendig werden,
  // kannst du eine api.js anlegen und die functions hier her importieren.
  { _id: 's3', userId: 'u3', text: 'Ipsum lorem', time: '2017-03-13T15:52:00' },
  { _id: 's4', userId: 'u4', text: 'sit doro atem', time: '2017-03-11T09:32:00' }
]

export const fetchStatusById = (id) => ({
  type: FETCH_ITEM,
  payload: sleep(1000).then(
    () => data.find(s => s._id === id)
  )
})

export const fetchStatus = () => ({
  type: FETCH_LIST,
  payload: sleep(2000).then(() => data)
})

export const addStatus = (status) => {
  return {
    type: ADD,
    // Hier kannst du dann in der Payload ein Promise einfügen.
    // redux-promise macht die magie.
    payload: sleep(750).then(() => status)
  }
}
