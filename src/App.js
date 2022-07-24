import CircleMenu from './components/circleMenu/circleMenu.jsx'
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Body from './components/body/body.jsx';
import './App.css';

function App() {
  return (
    <div className="app ">
      <Navbar/>
      <Header/>
      <br/>
      <Body/>
      <br/>
      <CircleMenu/>
    </div>
  );
}

export default App;
