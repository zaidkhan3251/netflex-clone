import React, { useState } from 'react';
import './App.css';
import Cards from './Cards';
import Sdata from './Sdata';

function ncards(val) {
       return (
              <Cards simg={val.imgsrc}
                     sname={val.sname}
                     title={val.title}
                     link={val.links}
              />
       );
}
function App(){
       return(
               <> <h1>Netflix Series Ap With React.js</h1>
                  <div className="main">
                            {Sdata.map(ncards)}
                     </div>   
                     
              </>
       );

}

export default App;
