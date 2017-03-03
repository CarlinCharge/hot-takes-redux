import initialState from '../initial-state.js';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case 'ATTEMPTING_LOGIN':
      return {
        status: 'AWAITING_AUTH_RESPONSE',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
      };
    case 'LOGOUT':
      return {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
      };
    case 'LOGIN':
      return {
        status: 'LOGGED_IN',
        email: action.email,
        displayName: action.displayName,
        photoURL: action.photoURL,
        uid: action.uid
      };
    default:
      return state;
  }
}
