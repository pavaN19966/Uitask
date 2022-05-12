import React from 'react';
import './style.css';
import img1 from './image.png';
import img2 from './ellipsesmall.png';
import img3 from './Icon1.png';
import img4 from './icon2.png';
import img5 from  './icon3.png';
import img6 from './ellipse big.png';
import img7 from './Group.png';
import img8 from './Group 973.png';
import img9 from './Group 974.png';
import img10 from './Group 975.png';
import img11 from './ivana.png';
import img12 from './Icon4.png';
import Topheader from './topheader';

export default function SectionPart1() {
  return (
    <div>
        <Topheader />
    <div className="banner">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                  <h2 className="text-whites">One Platform to Communicate,<br/>
                    Collaborate and accelerate</h2>
                    <p className="skills">slikk helps more tasks done in less time <br/>
                     it's Everything you need to work faster<br/>
                     Collaborate better,and improve productivity at your workplace 
                       </p>
                       <p className="call">50% <i class="fa fa-arrow-down" aria-hidden="true"></i><span className="text-white"> &nbsp; &nbsp; Call and Meetings</span></p>
                       <p className="call">45% <i class="fa fa-arrow-up" aria-hidden="true"></i> <span className="text-white"> &nbsp; &nbsp;Golas Achived</span></p>
                       <p className="call">3X  <span className="text-white"> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; Productivity</span></p>
                        <span className="btn btn-warning btn-warnings">Start Your Free Trail</span> <span className="btn btn-success text-white">Give a Live Demo</span>

                    </div>
                  <div className="col-md-6">
                      <img src={img1} alt="img" className="img1" />


                  </div>
                  <img src={img2} alt="img2" className="img2" /> <span className="addvisible"> Add Visibility to your Work </span>
                  </div>
        </div>
    </div>
                
                     
                     <br />
                     <br />
                     <div className="row margin-adjust">
                    <div className="col-md-4">
                        <div className="img3">
                      <img src={img3} className="img-3" alt="Cinque Terre" />
                         </div>
                         <br/>
                         <h4>Work & Forecasting</h4>
 
                      </div>
                      <div className="col-md-4">
                        <div className="img3">
                      <img src={img4} className="img-3" alt="Cinque Terre" />
                         </div>
                         <br/>
                         <h4>Work & Forecasting</h4>

                      </div>
                      <div className="col-md-4">
                        <div className="img3">
                      <img src={img5} className="img-3" alt="Cinque Terre" />
                         </div>
                          <br/>
                         <h4>Work & Forecasting</h4>

                      </div>
                       <img src={img6} className="position" alt="elipse" />

                       
                  </div>
                {/* section part2 start */}
                  <div className="container">
                       <div className="row">
                        <div className="col-md-6 time p-4">
                           <h2>Time Management</h2>
                           <p>Find and fix anything that eats time.<br/>
                           Lavender continuously learns what <br/>
                           time works best for you. The dashboard <br/>
                           helps you schedule time,manage capacity,<br/>
                           organize global calendars, and track milestones <br/>
                           at work. It also shows the current <br/>
                           status of projects and where you can <br/>
                           make changes to reduce the workload.</p>
                           <span className="know bg-primary text-center">Know More</span>
                          </div>
                             <div className="col-md-6 ">
                               <img src={img7} className="img7" alt="groupbanner" />
                             </div>
                        </div>
                      </div>
                    {/* section part2 end */}

        {/* section part3 start */}
                  <div className="container">
                       <div className="row">
                       <div className="col-md-6 img81">
                               <img src={img8} className="img8" alt="groupbanner" />
                             </div>
                        <div className="col-md-6 time time2">
                           <h2>Task Management</h2>
                           <p>Teamleap is trained to find and organize<br/>
                           tasks in terms of their priority. Each task<br/>
                           has a workflow that shows the brief,<br/>stakeholders, and deadlines. If the<br/>
                            requirement changes anytime, all the<br/>assignments get shuffled accordingly.<br/>
                            You also have other options like easy<br/>
                            search, recurring tasks,and multitask<br/> toolbar.</p>
                           <span className="know bg-primary text-center">Know More</span>
                          </div>
                             
                        </div>
                      </div>
                    {/* section part3 end */}
              {/* section part4 start */}
                  <div className="container">
                       <div className="row">
                        <div className="col-md-6 time p-4">
                           <h2>Kanban</h2>
                           <p> Setup in minutes, streamline your work and boost the productivity of your teams. Manage your projects with better task routing and easy workload planning. With intuitive intake forms and customizable workflows, your team can release quality products in less time.</p>
                           <span className="know bg-primary text-center">Know More</span>
                          </div>
                             <div className="col-md-6">
                               <img src={img9} className="img8" alt="groupbanner" />
                             </div>
                        </div>
                      </div>
            {/* section part4 end */}
             {/* section part5 start */}
             <div className="container">
                       <div className="row">
                       <div className="col-md-6 img81">
                               <img src={img10} className="img8" alt="groupbanner" />
                             </div>
                        <div className="col-md-6 time time2">
                           <h2>Create. Save. Share.</h2>
                           <p>Most digital assets get dropped into some random folder without a central storage location. Now, have all your files in one secure cloud storage to maintain brand consistency and repurpose at scale. Plus, keep things regulated with simple permission settings.</p>
                           <span className="know bg-primary text-center">Know More</span>
                          </div>
                             
                        </div>
                      </div>
                    {/* section part5 end */}
              <div className='container'>
              <h3 className="test">Testimonals</h3>
              <div className='row'>
              
                <div className='col-md-8 testimonials'>
               <img src={img11} className="img11" alt="image11" />
                   <div className="quotes">
                   <p><i class="fa fa-quote-left fas" aria-hidden="true"></i> &nbsp;
                     
                    Haoto has been in integral part of our<br/>
                    Work Eco system,Keeping track of things has <br/>
                    <span className="alan">Alan Thicke,Manager,Polymer </span><br/>

                    <img src={img12} className="img12" alt="img12" /> <span className="polymer">POLYMER</span> <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       <i class="fa fa-quote-right" aria-hidden="true"></i></p>
                    <img src={img2} className="smallelipse" alt="smallelipse" />
                   </div>
                   <img src={img6} className="elipseposition" alt="alipse" />

                 </div>
               </div>
            </div>

              </div>






                  

  )
}
