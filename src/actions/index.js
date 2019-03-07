export const fetch_user_request = () => {
  return {type: 'fetch_user_request'}
}

export const fetch_user_success = payload => {
  return {type: 'fetch_user_success', payload}
}

export const fetch_user_failed = error => {
  return {type: 'fetch_user_failed', error}
}
