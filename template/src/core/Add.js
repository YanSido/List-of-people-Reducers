import { React, useContext, useRef, useState } from "react";
import mainContext from "../contexts/main-context";

export default function Add() {
  const { list, dispatch } = useContext(mainContext);
  const [newPeopleName, setNewPeopleName] = useState("");
  const [newPeopleAge, setNewPeopleAge] = useState(0);
  const nameInputEl = useRef();
  const ageInputEl = useRef();

  function handleClick() {
    if (newPeopleName.length !== 0 && newPeopleAge)
      dispatch({ type: "ADD_FRIEND", data: { name: newPeopleName, age: newPeopleAge } });
    nameInputEl.current.value = "";
    ageInputEl.current.value = "";
  }

  return (
    <div className="input-group mb-3">
      <input
        ref={nameInputEl}
        onChange={(e) => {
          setNewPeopleName(e.target.value);
        }}
        type="text"
        class="form-control"
        placeholder="Name"
        aria-label="Name"
        aria-describedby="basic-addon1"
      />
      <input
        ref={ageInputEl}
        onChange={(e) => {
          setNewPeopleAge(e.target.value);
        }}
        type="text"
        className="form-control"
        placeholder="Age"
        aria-label="Age"
        aria-describedby="basic-addon1"
      />
      <button
        onClick={() => {
          handleClick();
        }}
        type="button"
        className="btn btn-primary"
        id="basic-addon1"
      >
        Add New
      </button>
    </div>
  );
}
