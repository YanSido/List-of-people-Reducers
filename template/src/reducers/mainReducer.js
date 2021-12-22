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
    case "UPDATE_FRIEND":
      let updatedState = state.map((item) => {
        if (item.name + " " + String(item.age) === action.data.oldName) {
          if (action.data.newName !== "" && action.data.age !== "") {
            return { ...item, age: action.data.age, name: action.data.newName };
          } else if (action.data.newName !== "" && action.data.age === "") {
            return { ...item, name: action.newName };
          } else if (action.data.newName === "" && action.data.age !== "") {
            return { ...item, age: action.data.age };
          }
        }
        return item;
      });
      return [...updatedState];
    default:
      return [...state];
  }
};
