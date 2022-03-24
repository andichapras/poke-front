import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Modal, Image} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

import css from './Index.module.css'

import Card from '../../components/Card/Card'
import { useHttpClient } from '../../components/hooks/http'
import Spinner from '../../components/loading/Spinner'

const Index = () => {
    const navigate = useNavigate()
    const {isLoading, error, sendRequest, clearError} = useHttpClient()
    const [loadedPokemons, setLoadedPokemons] = useState()

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const responseData = await sendRequest('http://localhost:5000/index/')
                setLoadedPokemons(responseData.hasil)
            } catch (err) {}
        }
        fetchPokemon()
    }, [sendRequest])

    const toDetailHandler = (x) => {
        navigate('/index/detail', { state:{ link: x } })
    }
    console.log(loadedPokemons)

    return (
        <React.Fragment> 
            <Modal show={error} onHide={clearError}>
                <Modal.Header>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{error}</p>
                </Modal.Body>
            </Modal>

            {isLoading && (
                <div className="center">
                    <Spinner />
                </div>
            )}

            {!isLoading && loadedPokemons && 
                <Container fluid>
                    <Row>
                        {loadedPokemons.map((poke, idx) =>{ 
                            const nama = poke.name
                            return(
                            <Col xs={12} md={3} lg={2}>
                                <Card 
                                    to={{
                                        pathname: `/index/${nama}`,
                                        state: {link: nama}
                                    }}
                                    className={css.pokeCard}>
                                        <div className={css.poke}>
                                            {nama}
                                        </div>
                                        <div className={css.poke}>
                                            <Image fluid src={poke.pic} />
                                        </div>
                                </Card>
                            </Col>
                        )})}
                    </Row>
                </Container>
            }
        </React.Fragment>
        
    )
}

export default Index