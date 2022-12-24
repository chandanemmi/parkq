export const userData = (data) => {
  return { type: "GET_USER_DATA", data };
};

export const searchValue = (data) => {
  return { type: "SEARCH", data };
};

export const selectOption = (data) => {
  return { type: "SELECT_OPTION", data };
};
