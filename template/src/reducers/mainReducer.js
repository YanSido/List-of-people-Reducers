export const mainReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return [...action.data];
    case "UPDATE_LIST":
      let updatedState = state.map((item) => {
        if (item.id === action.id) return { ...item, title: action.title };
        return item;
      });
      return [...updatedState];
    default:
      return [...state];
  }
};
