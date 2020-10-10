import React, { Component } from 'react';
import './App.css';
import News from './components/News/News';
import Sidenews from './components/News/Sidenews';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3:{
        type: 'top-headlines',
        query: 'country=in'
      },
      news4:{
        type: 'top-headlines',
        query: 'country=in&category=technology'
      }
    };
  }

// http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2f5b88c782444575a24e7499ee1bd726
  // http://newsapi.org/v2/top-headlines?country=in&apiKey=2f5b88c782444575a24e7499ee1bd726
  //https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=2f5b88c782444575a24e7499ee1bd726

  render() {
    return (
      <div className="container-fluid">
      
        <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo black-text" ><i class="medium material-icons">menu</i><span>Break</span>N</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Business</a></li>
                <li><a href="badges.html">Health</a></li>
                <li><a href="collapsible.html">Sports</a></li>
              </ul>
            </div>
          </nav>
        
        <div className="row">
        
          <div className="col s8 mainnews">
            <h5>Main News</h5>
            <News news={this.state.news1} />
            <h5>Tech News</h5>
            <News news={this.state.news2} />
          </div>
          <div className="col s3 sidenews">
            <h5>Highlights</h5>
            <Sidenews news={this.state.news3} />   
            {/* Here news is passed as prop to sidenews component */}
          </div>
        </div>
        <footer class="page-footer z-depth-3">
          <div class="container">
            <div class="row footer-row">
              <div class="col s12 center-align">
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
    );
  }
}

export default App;
