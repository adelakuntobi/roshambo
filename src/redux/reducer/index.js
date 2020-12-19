import { combineReducers } from 'redux'
import scoreReducer from './ScoreReducer'

// Using a combine reducers function to combine the reducers
const rootReducer = combineReducers({
  score: scoreReducer,
})

export default rootReducer;