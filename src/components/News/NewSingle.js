import React from 'react';

const NewSingle =({item}) =>(
    <div className="col s6 m4 l4">
            <div className="card hoverable">
            <a href={item.url} target="_blank">
                  <div className="card-image">
                      <img class="responsive-img" height="200" src={item.urlToImage} alt={item.title} />
                      {/* <span className="card-title"> {item.source.name}</span> */}
                  </div>
                  <div className="card-content">
                    <p>{item.title}</p>
                  </div>
                  </a>
                {/* <div class="card-action">
                <a href={item.url} target="_blank">Full Article..</a>
                </div> */}
            </div>
    </div>
   
); //stateless component

export default NewSingle;
