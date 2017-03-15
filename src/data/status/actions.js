import PouchDB from 'pouchdb'

export const FETCH = 'data/status/FETCH'
export const ADD = 'data/status/ADD'

const db = new PouchDB('micro-status');

export const fetchStatus = () => ({
  type: FETCH,
  payload: db.allDocs({include_docs: true}).then(result => result.rows.map(row => row.doc))
});

export const addStatus = (status) => {
  return {
    type: ADD,
    payload: db.put(status).then(result => db.get(result.id))
  }
}
