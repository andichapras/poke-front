import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import css from './Index.module.css'

import Card from '../../components/Card/Card'

const Index = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={3} lg={2}>
                    <Card to="/">
                        Bulbasaur
                    </Card>
                </Col>
                <Col xs={12} md={3} lg={2}>
                    <Card to="/">
                        Bulbasaur
                    </Card>
                </Col>
                <Col xs={12} md={3} lg={2}>
                    <Card to="/">
                        Bulbasaur
                    </Card>
                </Col>
                <Col xs={12} md={3} lg={2}>
                    <Card to="/">
                        Bulbasaur
                    </Card>
                </Col>
                <Col xs={12} md={3} lg={2}>
                    <Card to="/">
                        Bulbasaur
                    </Card>
                </Col>
                <Col xs={12} md={3} lg={2}>
                    <Card to="/">
                        Bulbasaur
                    </Card>
                </Col>
                <Col xs={12} md={3} lg={2}>
                    <Card to="/">
                        Bulbasaur
                    </Card>
                </Col>
                <Col xs={12} md={3} lg={2}>
                    <Card to="/">
                        Bulbasaur
                    </Card>
                </Col>
                <Col xs={12} md={3} lg={2}>
                    <Card to="/">
                        Bulbasaur
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Index