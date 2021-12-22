import React from "react";
import MainState from "../contexts/mainState";
import PeopleList from "./PeopleList";
import SearchBar from "./SearchBar";

export default function MainContainer() {
  return (
    <div>
      <MainState>
        <SearchBar />
        <PeopleList />
        <hr />
      </MainState>
    </div>
  );
}
