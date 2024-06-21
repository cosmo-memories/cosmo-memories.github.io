import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import Main from './Main';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p><h1>OwO</h1></p>
        <p>Placeholder page!</p>
      </header> */}
      {/* <Header /> */}

      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/helloworld" element={<HelloWorld/>}/>
            <Route path="/*" element={<Main/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
