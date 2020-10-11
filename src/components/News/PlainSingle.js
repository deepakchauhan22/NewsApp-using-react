import React from 'react';

const PlainSingle =({item}) =>(

    <div class="col s12 m6">
           <a href={item.url} target="_blank">
            <div class="card blue-grey darken-1 plaincard">
                <div class="card-content black-text">
                <p>{item.title}</p>
                
                </div>
            </div>
            </a>
    </div>
   
            
   
); //stateless component

export default PlainSingle;

