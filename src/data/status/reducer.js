const initialState = {
  byId: {},
  all: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const getAllStatus = (state) => state.data.status.all.map(id => state.data.status.byId[id])

export default reducer
