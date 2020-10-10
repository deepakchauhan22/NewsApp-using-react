import React from 'react';

const NewSingle =({item}) =>(
    <div className="col s4">
            <div className="card">
            <a href={item.url} target="_blank">
                  <div className="card-image">
                      <img src={item.urlToImage} alt={item.title} />
                      {/* <span className="card-title"> {item.source.name}</span> */}
                  </div>
                  <div class="card-content">
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
