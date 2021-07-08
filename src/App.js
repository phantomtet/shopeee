import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainPage from './components/mainPage';
import NavBar from './components/navBar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div style={{backgroundColor: '#ffc600', display: 'flex'}}>
          <img src='https://cdn.tgdd.vn/2021/07/banner/1200-44-1200x44-1.png' style={{margin: 'auto', width: '100%', maxWidth: '1200px'}}/>
        </div>
        <NavBar/>
        <MainPage/>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
