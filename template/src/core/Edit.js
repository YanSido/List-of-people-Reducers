import { React, useContext } from "react";
import mainContext from "../contexts/main-context";

export default function Edit(props) {
  const { list, dispatch } = useContext(mainContext);

  function handleClick(e) {
    let oldNameAndAge = "";
    let nameInput = document.createElement("input");
    let ageInput = document.createElement("input");
    let divInput = document.createElement("div");
    nameInput.setAttribute("placeholder", "Name");
    ageInput.setAttribute("placeholder", "Age");
    divInput.appendChild(nameInput);
    divInput.appendChild(ageInput);

    if (e.target.parentElement.id !== "edit-div") {
      if (e.target.parentElement.parentElement.id !== "edit-div") {
        oldNameAndAge =
          e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild
            .innerText;
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(
          e.target.parentElement.parentElement.parentElement.parentElement.parentElement
            .childNodes[0]
        );

        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.insertBefore(
          divInput,
          e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild
        );
      } else {
        oldNameAndAge =
          e.target.parentElement.parentElement.parentElement.parentElement.firstChild.innerText;
        e.target.parentElement.parentElement.parentElement.parentElement.removeChild(
          e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0]
        );
        e.target.parentElement.parentElement.parentElement.parentElement.insertBefore(
          divInput,
          e.target.parentElement.parentElement.parentElement.parentElement.firstChild
        );
      }
    } else {
      oldNameAndAge = e.target.parentElement.parentElement.parentElement.firstChild.innerText;
      e.target.parentElement.parentElement.parentElement.removeChild(
        e.target.parentElement.parentElement.parentElement.childNodes[0]
      );
      e.target.parentElement.parentElement.parentElement.insertBefore(
        divInput,
        e.target.parentElement.parentElement.parentElement.firstChild
      );
    }
    divInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (nameInput.value === "" || ageInput.value === "") alert("Name/Age is missing");
        if (/^\d+$/.test(ageInput.value))
          dispatch({
            type: "UPDATE_FRIEND",
            data: { newName: nameInput.value, age: ageInput.value, oldName: oldNameAndAge },
          });
        else alert("Age Must be NUMBER");
      }
    });
  }

  return (
    <div
      id="edit-div"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil"
          viewBox="0 0 16 16"
        >
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg>
      </button>
    </div>
  );
}
