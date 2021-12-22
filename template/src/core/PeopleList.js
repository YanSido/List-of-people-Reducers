import { React, useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { nanoid } from "nanoid";
import Add from "./Add";
import Remove from "./Remove";

export default function PeopleList() {
  const { list } = useContext(mainContext);
  return (
    <Container id="main-container">
      <ListGroup>
        {list.map((item) => {
          return (
            <ListGroup.Item id="people" key={nanoid()}>
              {item.name} {item.age}
              <Remove />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Add />
    </Container>
  );
}
