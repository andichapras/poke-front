import React from 'react'

import Header from './Header/Header'
import css from './Layout.module.css'

const Layout = (props) => {
    return(
        <div className={css.Body}>
            <header>
                <Header/>
            </header>
            <main className={css.Main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout