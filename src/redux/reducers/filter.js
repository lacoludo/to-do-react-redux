const initialState = "none"

function filter(state = initialState, action) {
  switch (action.type) {
    case "SELECT_FILTER":
      const newState = action.value
      return newState
    default:
      return state
  }
}

export default filter
