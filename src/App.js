import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftBar from './component/leftbar/leftBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Main from './component/main/main';

function App() {
  return (
    <Container fluid style={{fontSize: '0.9rem'}}>
      <Row>
        <LeftBar></LeftBar>
        <Main></Main>
      </Row>
    </Container>
  );
}

export default App;
