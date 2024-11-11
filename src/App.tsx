import './App.css';
import HelloWorld from './HelloWorld';
import Main from './Main';
import TicTacToe from './TicTacToe';
import PageNav from './commmon/nav';
import PageHead from './commmon/head';
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
        <PageHead />
      </div>
      <BrowserRouter>
        <div className='navbar'><PageNav /></div>
        <div className="content">
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