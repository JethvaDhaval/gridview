import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import React, { useState } from 'react'

import android from './android.png'
import ios from './ios.png'

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="preview">
          <div className="container">
            <div className="row mt-5">
              <div className="col">
                <div style={{width: "100px", height: "100px", backgroundColor: "red", margin: "0 auto 0 auto"}}></div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col text-center">
                <h4>Get This App Here</h4>
              </div>
              </div>
            <div className="row mt-2">
              <div className="col-sm m-1 p-0">
                <button type="button" className="btn btn-dark p-0" style={{width: "100%", backgroundColor: "black", minHeight: "39px"}}><h6 style={{textTransform: "uppercase"}}>Wise</h6><h6 style={{fontSize: "12px",lineHeight: "0.2"}}>Use on computer</h6></button>
              </div>
              <div className="col-sm m-1 p-0">
                <button type="button" className="btn btn-dark w-100 p-0" >
                <img src={android} width="100%" style={{borderRadius: "2px", maxHeight: "50px"}} />
                </button>
              </div>
              <div className="col-sm m-1 p-0">
                <button type="button" className="btn btn-dark w-100 p-0">
                   <img src={ios} width="100%" style={{borderRadius: "2px", maxHeight: "50px"}} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
