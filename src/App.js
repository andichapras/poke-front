import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout'
import Home from './containers/Home/Home'
import Index from './containers/Index/Index'
import MyPokemon from './containers/MyPokemon/MyPokemon'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/index" element={<Index/>}/>
          <Route path="/mine" element={<MyPokemon/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
