import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import css from './Card.module.css'

const Card = (props) => {
    return (
            <Link to={props.to} className={css.Link} onClick={props.onClick}>
                <div className={css.Plate}>
                    {props.children}
                </div>
            </Link>
    )
}
export default Card