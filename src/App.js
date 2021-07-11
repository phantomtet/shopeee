import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './components/navBar';
import MainPage from './pages/mainPage';
import PhonePage from './pages/phonePage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div style={{backgroundColor: '#ffc600', display: 'flex'}}>
          <img src='https://cdn.tgdd.vn/2021/07/banner/1200-44-1200x44-1.png' style={{margin: 'auto', width: '100%', maxWidth: '1200px'}}/>
        </div>
        <NavBar/>
        <Switch>
          <Route exact path='/'><MainPage/></Route>
          <Route exact path='/tin-tuc'></Route>
          <Route path='/dtdd'><PhonePage/></Route>
        </Switch>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
