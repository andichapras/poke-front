import React from 'react'

import Header from './Header/Header'

const Layout = (props) => {
    return(
        <React.Fragment>
            <header>
                <Header/>
            </header>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout