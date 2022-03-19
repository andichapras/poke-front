import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <NavLink to="/">
            <h1>POKEMON APP</h1>
        </NavLink>
    )
}

export default Header