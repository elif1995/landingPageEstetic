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
      {/* <CircleMenu/> */}
      <br/>
      <br/>
      <Body/>
    </div>
  );
}

export default App;
