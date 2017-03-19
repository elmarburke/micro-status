import PouchDB from 'pouchdb'

export const FETCH_LIST = 'data/status/FETCH_LIST'
export const FETCH_ITEM = 'data/status/FETCH_ITEM'
export const ADD = 'data/status/ADD'
export const SUBSCRIBED = 'data/status/SUBSCRIBED'
export const UNSUBSCRIBED = 'data/status/UNSUBSCRIBED'
export const CHANGED = 'data/status/CHANGED'

const db = new PouchDB('micro-status')

export const fetchStatusById = (id) => ({
  type: FETCH_ITEM,
  payload: db.get(id)
})

export const fetchStatus = () => ({
  type: FETCH_LIST,
  payload: db.allDocs({include_docs: true})
    .then(result => result.rows.map(row => row.doc))
})

export const addStatus = (status) => {
  return {
    type: ADD,
    payload: db.put(status)
      .then(result => db.get(result.id))
  }
}

const streamValueReceived = changes => ({
  type: CHANGED,
  payload: changes.doc
})

export const subscribeToPouchChangesFeed = () => (dispatch) => {
  // Hier kannst du dispatch aufrufen. Dispatch nimmt eine action als parameter entgegen. Auch mehrfach
  dispatch({type: SUBSCRIBED})
  return db.changes({
    // ???????
    include_docs: true,
    since: 'now',
    live: true
  }).on('change', (result) => dispatch(streamValueReceived(result)))
}

export const unsubscribeFromchangesFeed = (feed) => {
  feed.cancel()

  return {type: UNSUBSCRIBED}
}
