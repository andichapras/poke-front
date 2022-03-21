import React from 'react'
import { NavLink } from 'react-router-dom'

import css from './MenuCard.module.css'

const MenuCard = (props) => {
    return (
            <NavLink to={props.to} className={css.Link}>
                <div className={css.Plate}>
                        {props.children}
                </div>
            </NavLink>
    )
}
export default MenuCard