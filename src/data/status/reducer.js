import { ADD } from './actions'

const initialState = {
  byId: {},
  all: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      if (!action.error) {
        return {
          ...state,
          byId: {
            ...state.byId,
            [action.payload._id]: action.payload
          },
          all: [action.payload._id, ...state.all]
        }
      } else {
        return state
      }
    default:
      return state
  }
}

export const getAllStatus = (state) => state.data.status.all.map(id => state.data.status.byId[id])

export default reducer
