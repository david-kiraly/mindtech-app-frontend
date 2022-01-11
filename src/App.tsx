import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Content from './components/Content';
import Header from './components/Header';

const App = () => {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Content />
        </Container>
    );
};

export default App;