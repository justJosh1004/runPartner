import { TOGGLE_MODAL } from '../actions/types';

const INITIAL_STATE = {
  isOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
};
