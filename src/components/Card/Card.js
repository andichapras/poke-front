import React from 'react'
import { NavLink } from 'react-router-dom'

import css from './Card.module.css'

const Card = (props) => {
    return (
            <NavLink to={props.to} className={css.Link}>
                <div className={css.Plate}>
                    {props.children}
                </div>
            </NavLink>
    )
}
export default Card