import React, {useState} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout'
import Home from './containers/Home/Home';

function App() {
  return (
    <div>
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
