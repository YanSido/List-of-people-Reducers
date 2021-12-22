import React from "react";
import MainState from "../contexts/mainState";
import PeopleList from "./PeopleList";

export default function MainContainer() {
  return (
    <div>
      <MainState>
        <PeopleList />
        <hr />
      </MainState>
    </div>
  );
}
