import { React, useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { nanoid } from "nanoid";
import Add from "./Add";

export default function PeopleList() {
  const { list } = useContext(mainContext);
  return (
    <Container>
      <ListGroup>
        {list.map((item) => {
          return (
            <ListGroup.Item key={nanoid()}>
              {item.name} {item.age}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Add />
    </Container>
  );
}
