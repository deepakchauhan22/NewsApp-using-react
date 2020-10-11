import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Business from './components/Business';
import Health from './components/Health';
import Sports from './components/Sports';
import {Switch,Route, Redirect,BrowserRouter,NavLink} from 'react-router-dom';
class App extends Component {
 
  render() {
    return (
      
      <BrowserRouter>
      <div className="container-fluid">
      
         <nav>
            <div className="nav-wrapper">
            <NavLink className="brand-logo black-text active " to= "/main">
            <i className="medium material-icons barlogo">menu</i><span>Break</span>N
                   </NavLink>
                   <a href="#" class="sidenav-trigger black-text" data-target="mobile-nav">
		              	<i class="material-icons">menu</i>
	                	</a>
             
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink  to= "/business">Business</NavLink></li>
                <li><NavLink  to= "/health">Health</NavLink></li>
                <li><NavLink  to= "/sports">Sports</NavLink></li>
              </ul>
            </div>
          </nav>
          
            <ul class="sidenav" id="mobile-nav">
            <NavLink className="brand-logo black-text active" to= "/main">
                    <span>Break</span>N
                              </NavLink>
                              <li><NavLink  to= "/business">Business</NavLink></li>
                <li><NavLink  to= "/health">Health</NavLink></li>
                <li><NavLink  to= "/sports">Sports</NavLink></li>
                  
            </ul>
                    
        

          <Switch> 
                <Route path="/main" component={Main} />
                <Route path="/business" component={Business} />
                <Route path="/health" component={Health}  />
                <Route path="/sports" component = {Sports} />
                  <Redirect to = "/main" />
         </Switch>     

        
      

        <footer className="page-footer z-depth-3">
          <div className="container">
            <div className="row footer-row">
              <div className="col s12 center-align">
                  <div className="aboutme">
                      <p className= "name">A project by <a href="https://www.linkedin.com/in/deepakchauhan22/"><span>Deepak Chauhan</span></a></p>
            
                      <div className="footer-bar">

                        <a href="https://www.linkedin.com/in/deepakchauhan22/" className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a> 
                        <a href="https://github.com/deepakchauhan22" className="github"><i className="fa fa-github" aria-hidden="true"></i></a> 
                        <a href="https://www.facebook.com/Glassofchampagn" className="facebook"><i className="fa fa-facebook"></i></a> 
                        <a href="https://www.instagram.com/glassofchampagn/" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a> 
                        <a href="https://medium.com/@dee22" className="medium"><i className="fa fa-medium" aria-hidden="true"></i></a> 
                      
                        </div>
                  </div>
              </div>
            </div>
          </div>
         
        </footer>
            
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
