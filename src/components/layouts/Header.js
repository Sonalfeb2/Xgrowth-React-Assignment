import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center my-4">Task Manager</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
