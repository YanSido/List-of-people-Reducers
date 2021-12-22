import { React, useContext, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { nanoid } from "nanoid";
import Add from "./Add";
import Remove from "./Remove";
import Edit from "./Edit";

export default function PeopleList() {
  const { list } = useContext(mainContext);

  return (
    <Container id="main-container">
      <ListGroup>
        {list.map((item) => {
          return (
            <ListGroup.Item id="people" key={nanoid()}>
              <i>
                {item.name} {item.age}
              </i>

              <div id="buttons-div">
                <Edit />
                <Remove />
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Add />
    </Container>
  );
}
