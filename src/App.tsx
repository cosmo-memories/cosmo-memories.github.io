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
    <div className="App">
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