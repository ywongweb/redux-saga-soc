import { combineReducers } from 'redux'

function user(state = {}, action) {
  switch (action.type) {
    case 'fetch_user_success': {
      return { repos: action.payload.items.length }
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user
})

export default rootReducer
