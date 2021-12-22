import React, { useContext, useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { listOfPeople } from "../db/listOfPeople";
export default function SearchBar() {
  const { list, dispatch } = useContext(mainContext);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    initialData();
  }, [filter]);

  const handleChange = (e) => {
    setFilter(e.target.value);
    dispatch({ type: "FILTER_LIST", name: e.target.value });
  };

  const initialData = () => {
    if (filter.length === 0) dispatch({ type: "INITIAL_DATA", data: [...listOfPeople] });
  };

  return (
    <Container style={{ margin: "0 auto", marginTop: "20px", width: "50%" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => {
              handleChange(e);
            }}
            value={filter}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
      </Form>
    </Container>
  );
}
