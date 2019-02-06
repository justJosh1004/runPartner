import runs from '../apis/runs';
import history from '../history';
import {
  CREATE_RUN,
  FETCH_RUN,
  FETCH_RUNS,
  DELETE_RUN,
  EDIT_RUN
} from './types';

export const createRun = formValues => async (dispatch, getState) => {
  const userId = 1; // hard code for one user for now
  const response = await runs.post('/runs', { ...formValues, userId });

  dispatch({ type: CREATE_RUN, payload: response.data });

  history.push('/runs');
};

export const fetchStreams = () => async dispatch => {
  const response = await runs.get('/runs');

  dispatch({ type: FETCH_RUNS, payload: response.data });
};

export const fetchRun = id => async dispatch => {
  const response = await runs.get(`/runs/${id}`);

  dispatch({ type: FETCH_RUN, payload: response.data });
};

export const editRun = (id, formValues) => async dispatch => {
  const response = await runs.patch(`/runs/${id}`, formValues);

  dispatch({ type: EDIT_RUN, payload: response.data });

  history.push('/runs');
};

export const deleteRun = id => async dispatch => {
  await runs.delete(`/runs/${id}`);

  dispatch({ type: DELETE_RUN, payload: id });

  history.push('/runs');
};
