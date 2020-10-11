import React, { Component } from 'react';
import News from './News/News';
import Sidenews from './News/Sidenews';
class Sports extends Component {
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
        query: 'country=in&category=sports'
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">        
        <div className="row">
        
          <div className="col s11 m8 l8  mainnews">
            <h5>Sports News</h5>
            <News news={this.state.news4} />
            <h5>Tech News</h5>
            <News news={this.state.news2} />
          </div>
          <div className="col s11 m3 l3 sidenews">
            <h5>Highlights</h5>
            <Sidenews news={this.state.news3} />   
            {/* Here news is passed as prop to sidenews component */}
          </div>
        </div>
            
      </div>
    );
  }
}

export default Sports;
