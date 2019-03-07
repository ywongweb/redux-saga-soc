import { fork, call, all, takeLatest, put } from 'redux-saga/effects'
import { fetch_user_failed, fetch_user_success } from "../actions";

function* fetchUser() {
  try {
    const response = yield call(fetch, 'https://api.github.com/search/users?q=tom')
    const responseJson = yield response.json()
    // throw new Error('fake error message') // uncomment to see what happens when API fails
    yield put(fetch_user_success(responseJson))
  } catch (error) {
    yield put(fetch_user_failed(error.toString()))
  }
}

function* watchFetchUserEvent() {
  yield takeLatest('fetch_user_request', fetchUser)
}

function* rootSagas() {
  yield all([
    fork(watchFetchUserEvent),
  ])
}

export default rootSagas
