import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Modal, Image, ModalTitle, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

import css from './MyPokemon.module.css'

import Card from '../../components/Card/Card'
import { useHttpClient } from '../../components/hooks/http'
import Spinner from '../../components/loading/Spinner'

const MyPokemon = () => {
    const navigate = useNavigate()
    const {isLoading, error, sendRequest, clearError} = useHttpClient()
    const [loadedPokemon, setLoadedPokemon] = useState()
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const responseData = await sendRequest('http://localhost:5000/mine/')
                setLoadedPokemon(responseData.myPokemon)
            } catch (err) {}
        }
        fetchPokemon()
    }, [sendRequest])

    const openModal = (p) => {
        let newMyPokemon = [...loadedPokemon]
        newMyPokemon[p].modal = true
        setLoadedPokemon(newMyPokemon)
    }
    
    const closeModal = () => {
        let newMyPokemon = [...loadedPokemon]
        newMyPokemon.map((p) => {
            p.modal = false
        })
        setLoadedPokemon(newMyPokemon)
    }

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

            {!isLoading && loadedPokemon && 
                <Container fluid>
                    <Row>
                        {loadedPokemon.map((poke, idx) => (
                            <Col xs={12} md={3} lg={2}>
                                <Button onClick={() => openModal(idx)}>
                                    <div>
                                        {poke.pokemon}
                                    </div>
                                    <div>
                                        nickname = {poke.name}
                                    </div>
                                    <div>
                                        <Image fluid src={poke.picture} />
                                    </div>
                                </Button>
                            </Col>
                        ))}
                    </Row>
                </Container>
            }

            {loadedPokemon && loadedPokemon.map((pokemon, idx) => {
                if(pokemon.modal === true) {
                    return (
                        <Modal show={pokemon.modal} onHide={closeModal}>
                            <Modal.Header>
                                <ModalTitle>{pokemon.pokemon}, nama: {pokemon.name}</ModalTitle>
                            </Modal.Header>
                            <Modal.Body>
                                <Button variant="primary">Rename</Button>
                                <Button variant="danger">Release</Button>
                            </Modal.Body>
                        </Modal>
                    )
                }
            })

            }
            
        </React.Fragment>
        
    )
}

export default MyPokemon