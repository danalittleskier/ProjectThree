import React from 'react';
import { Container, Row, Col, TextInput, Button } from "react-materialize";


function Signup({onClick}) {
    return (
        <Container>
            <h1 className="center">Sign Up!</h1>
        <Row>
          <Col s={6}>
            <TextInput email validate placeholder="Email" s={12} inputClassName="input-field"/>
          </Col>
          <Col s={6}>
            <TextInput password  placeholder="Password" s={12} inputClassName="input-field"/>
          </Col>
        </Row>
        <Button onClick={onClick}>Submit</Button>
      </Container>
    )
}

export default Signup
