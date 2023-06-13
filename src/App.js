import React from "react";
import { Navbar, Container, Card } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#" className="App-link">
            My React App
          </Navbar.Brand>
        </Navbar>
        <Container>
          <h1>My React App</h1>
          <Card>
            <Card.Body>
              <Card.Title>My React App1</Card.Title>
              <Card.Text>Content.</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>My React App App2</Card.Title>
              <Card.Text>Content.</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>My React App App3</Card.Title>
              <Card.Text>Content.</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default App;
