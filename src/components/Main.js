import React, { Component } from 'react';
import News from './News/News';
import PlainNews from './News/PlainNews';
import Sidenews from './News/Sidenews';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'country=in'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3:{
        type: 'top-headlines',
        query: 'country=in&category=technology' 
      },
      news4:{
        type: 'top-headlines',
        query: 'country=in&category=entertainment'
      }
    };
  }

// http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2f5b88c782444575a24e7499ee1bd726
  // http://newsapi.org/v2/top-headlines?country=in&apiKey=2f5b88c782444575a24e7499ee1bd726
  //https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=2f5b88c782444575a24e7499ee1bd726

  render() {
    return (
     
        <div className="row">
          <div className="col s11 m8 l8 mainnews">
            <h5>Main News</h5>
            <News news={this.state.news1} />
            <h5>Tech News</h5>
            <PlainNews news={this.state.news3} />
          </div>
          <div className="col s11 m3 l3 sidenews">
            <h5>Highlights</h5>
            <Sidenews news={this.state.news4} />   
            {/* Here news is passed as prop to sidenews component */}
          </div>
        </div>
            //    <div className="col s6 m4 l4"></div>
    
    );
  }
}

export default Main;
