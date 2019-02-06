import _ from 'lodash';
import {
  CREATE_RUN,
  FETCH_RUN,
  FETCH_RUNS,
  DELETE_RUN,
  EDIT_RUN
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RUNS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_RUN:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_RUN:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_RUN:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_RUN:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
