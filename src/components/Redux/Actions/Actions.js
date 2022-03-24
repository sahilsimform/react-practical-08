export const signupUser = (data) => {
  return {
    type: "SIGNUP_USER",
    payload: data,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
