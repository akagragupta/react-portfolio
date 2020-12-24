import React,{useState} from "react";
import Aboutme from "./components/aboutme";
import Nav from './components/nav';
import Projects from './components/projects';
import Contact from './components/contact';
import './styles/app.scss';
import {BrowserRouter as Router,  Route} from 'react-router-dom';


function App() {


  const [activated, setActivated]= useState(false);

  return (
    <div className="App" >
      <button onClick={()=>{setActivated(!activated);console.log(activated);}}  className="navbutton">Navbar</button>
      <Router>
      <Nav activated={activated} />
      <div className={`container ${activated ? "activate-container": ""}`}>
        <Route path="/aboutme" component={Aboutme}  />
        <Route path="/project" component={Projects} />
        <Route path="/contact" component={Contact} />
        {/* <Aboutme /> */}
      </div>
      
      
      </Router>
    </div>
  );
}

export default App;
