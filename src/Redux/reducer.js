export const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        UserDetails: action.data,
      };
    case "SEARCH":
      return {
        ...state,
        searchField: action.data,
      };
    case "SELECT_OPTION":
      return {
        ...state,
        selectO: action.data,
      };
    default:
      return [];
  }
};
