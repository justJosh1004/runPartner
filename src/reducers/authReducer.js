// hard coded for now until we can connect to the rails auth
const INITIAL_STATE = {
  isSignedIn: true,
  userId: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
