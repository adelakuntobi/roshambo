

const initialState = {
  humanScore: 0,
  computerScore: 0
}

// A reducer function to receive the data from the API
const scoreReducer = (state = initialState, action) => {
  switch (action.type) {

  case "ADD_TO_HUMAN":
    return {
      ...state,
      // humanScore + 1
      humanScore: action.payload + 1
    }

  case "ADD_TO_COMPUTER":
    return {
      ...state,
      computerScore: action.payload + 1
    }
  
    default:
      return state
  }
}

export default scoreReducer