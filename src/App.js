import React, {useState} from 'react'

import './App.css';
import Layout from './Layout/Layout'

import Home from './containers/Home/Home'

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Home/>
      </Layout>
    </React.Fragment>
  );
}

export default App;
