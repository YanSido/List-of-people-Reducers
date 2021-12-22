import React, { useReducer } from "react";
import mainContext from "./main-context";
import { mainReducer } from "../reducers/mainReducer";
import { listOfPeople } from "../db/listOfPeople";
const MainState = (props) => {
  const [list, dispatch] = useReducer(mainReducer, [...listOfPeople]);

  return (
    <mainContext.Provider
      value={{
        list,
        dispatch,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainState;
