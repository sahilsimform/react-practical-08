const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        user: action.payload,
      };
    case "LOGOUT_USER":
      return {
        user: null,
      };
    default:
      return state;
  }
};
