export const registerUser = (data) => {
  return {
    type: "REGISTER_USER",
    payload: data,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
