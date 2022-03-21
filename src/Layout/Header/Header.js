import React from 'react'
import { NavLink } from 'react-router-dom'

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Top}>
            <NavLink to="/" className={css.Link}>
                <h1 className={css.Brand}>POKEMON APP</h1>
            </NavLink>
        </div>
    )
}

export default Header