import React from 'react';
import logo from './logo.JPG';
import logo1 from './logo2.png';


export default function Topheader() {
  return (
    <div>
       <div className="topheader">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                   <img src={logo} alt="logo" className="logo"/> <img src={logo1} className="logo1" /> 
                  </div>
                      <div className="col-md-5">
                           <ul>
                             <li>Learn</li>
                              <li>Product</li>
                              <li>Pricing</li>
                         </ul>
                      </div>
                      <div class="col-md-5">
                      <ul>
                          <li>Book A Demo</li>
                           <li>Sign In</li>
                           <li><input type="button" className="btn btn-primary" value="Try for Free" /></li>
                      </ul>
                     </div>
                  </div>
             </div>
         </div>
       </div>
  
  )
}
