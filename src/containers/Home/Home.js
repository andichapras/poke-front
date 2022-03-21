import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import css from './Home.module.css'

import MenuCard from '../../components/MenuCard/MenuCard'

const Home = () => {
    return (
        <Container fluid>
            <Row className={css.Menu}>
                    <Col className={css.Isi} xs={12} md={6}>
                        <MenuCard to="/index">
                                Index
                        </MenuCard>
                    </Col>
                    <Col className={css.Isi} xs={12} md={6}>
                        <MenuCard to="/mine">
                                My Pokemon
                        </MenuCard>
                    </Col>
            </Row>
        </Container>
    )
}

export default Home