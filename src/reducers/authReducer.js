import { SIGN_IN, SIGN_OUT } from '../actions/types';

// hard coded for now until we can connect to the rails auth
const INITIAL_STATE = {
  isSignedIn: true,
  userId: 1,
  owner: 'Josh'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
