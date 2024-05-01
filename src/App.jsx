import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home'
import Toko from './component/toko'
import Upload from './component/upload'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function Introduction({ nama, kelas }){
  return (

  <div className="App">
    <h1>halo, nama saya {nama} dan saya kelas {kelas} </h1>
  </div>
  );
}


class App extends Component {
  render() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/toko/:id" element={ <Toko /> } />
        <Route path="/upload" element={ <Upload /> } />
       </Routes>
      </BrowserRouter>
    </>
  )
}
}

export default App