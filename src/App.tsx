import './App.css';
import HelloWorld from './HelloWorld';
import Main from './Main';
import TicTacToe from './TicTacToe';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme ({
  palette: {
    primary: {
      main: '#282c34'
    },
    secondary: {
      main: '#61dafb'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <div className="wrapper">
      <div id="title">
        <h1 className="left"><b>COSMO MEMORIES</b></h1>
        <h1 className="right"><a href="https://cosmo-memories.github.io/">HOME</a><b> // </b>
                          <a href="https://cosmo-memories.github.io/blog/">BLOG</a><b> // </b>
                          <a href="https://cosmo-memories.github.io/math/">MATH</a><b> // </b>
                          <a href="https://github.com/cosmo-memories/">GITHUB</a></h1>
        {/* <h2>HOME</h2> */}
        <br />
        <hr />
      </div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/helloworld" element={<HelloWorld/>}/>
            <Route path="/ttt" element={<TicTacToe/>}/>
            <Route path="/*" element={<Main/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;