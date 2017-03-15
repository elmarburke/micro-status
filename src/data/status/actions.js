import PouchDB from 'pouchdb'

export const FETCH_LIST = 'data/status/FETCH_LIST'
export const FETCH_ITEM = 'data/status/FETCH_ITEM'
export const ADD = 'data/status/ADD'

const db = new PouchDB('micro-status');


export const fetchStatusById = (id) => ({
  type: FETCH_ITEM,
  payload: db.get(id)
})

export const fetchStatus = () => ({
  type: FETCH_LIST,
  payload: db.allDocs({include_docs: true}).then(result => result.rows.map(row => row.doc))
})

export const addStatus = (status) => {
  return {
    type: ADD,
    payload: db.put(status).then(result => db.get(result.id))
  }
}
