import { combineReducers, legacy_createStore as createStore } from 'redux'
import userReducer, { userInitialState } from './userReducer'
import { surveyReducer, surveyInitialState } from './surveyReducer'

const rootReducer = combineReducers({ user: userReducer, survey: surveyReducer })
const store = createStore(rootReducer, {
  user: userInitialState,
  survey: surveyInitialState,
})

export { store }
