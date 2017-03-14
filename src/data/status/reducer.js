import { ADD, FETCH } from './actions'

import { normalize, schema } from 'normalizr'

const statusSchema = new schema.Entity('status', {}, {idAttribute: '_id'})
const statusListSchema = [ statusSchema ]

const initialState = {
  byId: {},
  all: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  if (action.error) {
    return {
      ...state,
      error: action.payload
    }
  }

  switch (action.type) {
    case `${ADD}_PENDING`:
      return {
        ...state,
        saving: true
      }
    case `${ADD}_FULFILLED`:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload._id]: action.payload
        },
        all: [action.payload._id, ...state.all]
      }
    case `${FETCH}_FULFILLED`:
      const normalizedData = normalize(action.payload, statusListSchema)
      return {
        ...state,
        byId: {
          ...state.byId,
          ...normalizedData.entities.status
        },
        all: normalizedData.result
      }
    default:
      return state
  }
}

export const getAllStatus = (state) => state.data.status.all.map(id => state.data.status.byId[id])

export default reducer
