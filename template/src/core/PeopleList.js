import { React, useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { nanoid } from "nanoid";

export default function PeopleList() {
  const { list } = useContext(mainContext);
  return (
    <Container>
      <ListGroup>
        {list.map((item) => {
          return <ListGroup.Item key={nanoid()}>{item.name}</ListGroup.Item>;
        })}
      </ListGroup>
    </Container>
  );
}
