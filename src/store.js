import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './reducers'
import rootSagas from './sagas'

function configureStore(initialState) {
  const middlewares = []
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)
  const enhancers = composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(rootReducers, initialState, enhancers)
  sagaMiddleware.run(rootSagas)
  return store
}

export default configureStore()
