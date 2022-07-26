import CircleMenu from './components/circleMenu/circleMenu.jsx'
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Body from './components/body/body.jsx';
import Contact from './components/contact/contact.jsx';
import './App.css';

function App() {
  return (
    <div className="app ">
      <Navbar/>
      <Header/>
      <br/>
      <Body/>
      
      <CircleMenu/>
      <Contact/>
      <div className="fotter">
        <h4 style={{ fontFamily:'initial',textAlign:'center',backgroundColor:'lightGrey',padding:'1vh'}}>developed in 2022 by: Eli Frenkin &copy;</h4 >
      </div>
    </div>
  );
}

export default App;
