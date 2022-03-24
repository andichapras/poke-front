import React, { useState, useEffect, useCallback, useMemo, createContext } from 'react'
import {Container, Row, Col, Image, Modal, Button, ModalTitle, Form} from 'react-bootstrap'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

import css from './PokemonDetail.module.css'

import { useHttpClient } from '../../../components/hooks/http'
import Spinner from '../../../components/loading/Spinner'

const PokemonDetail = (props) => {
    let { pokedetail } = useParams()
    const navigate = useNavigate()

    const {isLoading, error, sendRequest, clearError} = useHttpClient()
    const [loadedPokemon, setLoadedPokemon] = useState()
    const [modal, setModal] = useState(false)
    const [nameState, setNameState] = useState('')

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5000/index/${pokedetail}`)
                setLoadedPokemon(responseData.pokemon)
            } catch (err) {}
        }
        fetchPokemon()
    }, [sendRequest])
    
    console.log(loadedPokemon)

    const buttonCatch = () => {
        setModal(true)
    }
    
    const closeCatch = () => {
        setModal(false)
    }

    const changeNameInput = e => {
        let input = e.target.value
        setNameState(input)
        console.log(nameState)
    }
    
    const catchPokemonHamdler = async (event) => {
        console.log(nameState)
        event.preventDefault()
        try {
            await sendRequest(
                `http://localhost:5000/index/${pokedetail}`,
                'POST',
                JSON.stringify({
                    name: nameState
                }), 
                {
                    'Content-Type': 'application/json'
                }
            )
            navigate('/')
        } catch (err) {}
        setModal(false)
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
                <Container>
                    <Row>
                        <Col xs={12} lg={3} className={css.colImage}>
                            <Image src={loadedPokemon.picture} className={css.image} />
                        </Col>
                        <Col xs={12} lg={9}>
                            <div className={css.divName}>
                                <h3 className={css.top}>{loadedPokemon.pokemon}</h3>
                                <Button className={css.top} variant="primary" onClick={buttonCatch}>Catch</Button>
                            </div>
                            <div className={css.divTypes}>
                                {loadedPokemon.types.map((t) => (
                                    <h5 className={css.type}>{t}</h5>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={12} className={css.colMoves}>
                            <div>
                                <h5>Moves</h5>
                            </div>
                            <div className={css.divMoves}>
                                <ul className={css.listMoves}>
                                    {loadedPokemon.moves.map((m, idx) => (
                                        <li className={css.move}>{m}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }

            <Modal show={modal} onHide ={closeCatch}>
                <Form onSubmit={catchPokemonHamdler}>
                    <Modal.Header>
                        <ModalTitle>Catch {pokedetail}</ModalTitle>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Berikan nama pada Pokemon</Form.Label>
                            <Form.Control type='text' placeholder='masukkan nama' onInput={changeNameInput} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type='submit' >
                            Catch Now !
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </React.Fragment>
        
    )
}

export default PokemonDetail