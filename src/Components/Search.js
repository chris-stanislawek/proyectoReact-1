import React from "react";
import { Form, Col } from "react-bootstrap";

const Search = ({ params, onParamChange }) => {
  return (
    <Form className="mb-4">
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label> </Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.description}
            name="description"
            type="text"
            width="small"
          />
        </Form.Group>

        {/* <Form.Group as={Col}>
                    <Form.Label>Locación</Form.Label>
                    <Form.Control onChange={onParamChange} 
                    value= {params.location} name="location" type="text" />
                </Form.Group> */}
        {/* 
                <Form.Group as={Col} xs="auto" className="ml-2" >
                    <Form.Check onChange={onParamChange} value={params.part_time} name="part_time"
                    id="part_time" label="Medio tiempo" type="checkbox"/>
                </Form.Group> <br/> 

                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check onChange={onParamChange} value={params.full_time} name="full_time"
                    id="full_time" label="Full Time" type="checkbox"/>
                </Form.Group> */}
      </Form.Row>
    </Form>
  );
};

export default Search;
