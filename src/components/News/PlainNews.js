
import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';
import PlainSingle from './PlainSingle';
class PlainNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=2f5b88c782444575a24e7499ee1bd726`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      .catch((error) => {
        this.setState({
            error:true
        })
    });
  }

  renderItems() {
    if(!this.state.error){
    return this.state.news.map((item) => (
      <PlainSingle key={item.url} item={item} />
    ));
    }
    else{
        return <Error />
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default PlainNews;
