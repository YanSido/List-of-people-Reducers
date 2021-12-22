export const mainReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return [...action.data];
    case "FILTER_LIST":
      let stateAfterFilter = state.filter((item) => {
        if (item.name.toLowerCase().includes(action.name.toLowerCase())) return item.name;
      });
      return [...stateAfterFilter];
    case "ADD_FRIEND":
      const newPeople = action.data;
      return [...state, newPeople];
    case "REMOVE_FRIEND":
      const updatedList = state.filter((item) => {
        if (item.name + " " + String(item.age) !== action.data.name) return item;
      });
      return [...updatedList];
    default:
      return [...state];
  }
};
