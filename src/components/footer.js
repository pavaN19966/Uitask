import React from 'react';
import footerlogo from './footerlogo.png';
import footer1 from './Group1.png';
import footer2 from './Group2.png';
import social1 from './facebook.png';
import social2 from './twitter.png';
import social3 from './linkedin.png';
import social4 from './youtube.png';
import social5 from './instagram.png'

export default function Footer() {
    const data = [
        {
          title: "Learn",
          content: ["Help", "Onboarding", "Blog", "Hierarchy", "Support", "Articles"],
        },
        {
          title: "Product",
          content: ["HTasks", "Goals", "Import", "Hierarchy", "Docs", "Reportingelp"],
        },
        {
          title: "Use Cases",
          content: [
            "Project",
            "Management",
            "Sales",
            "CRM",
            "Startup",
            "Remote",
            "Non",
            "Profit",
            "Design",
            "Non",
          ],
        },
        {
          title: "Features",
          content: [
            "Project",
            "Management",
            "Sales",
            "CRM",
            "Startup",
            "Remote",
            "Work",
            "Marketing",
            "Design",
            "Non",
          ],
        },
        {
          title: "Compare",
          content: [
            "Project",
            "Management",
            "Sales",
            "CRM",
            "Startup",
            "Remote",
            "Work",
            "Marketing",
            "Non",
            "Profit",
            "Design",
            "Non",
            "CRM",
            "Startup",
          ],
        },
        {
          title: "Resources",
          content: ["HTasks", "Goals", "Import", "Hierarchy", "Docs", "Reportingelp"],
        },
        {
          title: "Slikk",
          content: [
            "HTasks",
            "Goals",
            "Import",
            "Hierarchy",
            "Docs",
            "Reportingelp",
            "Hierarchy",
            "Docs",
            "Reportingelp",
          ],
        },
    ]

  return (
    <div>
        <div className="footer">
            <div className="search">
            
                <img src={footerlogo} className="footerlogo" alt="footerlogo" />
                 <h2 className="text-dark task">Task Management made simple</h2>
               <div className="book">
                 <button className="btns">BOOK A DEMO</button>
             </div>
           </div>
           <div className="containers">
        <div className="containers-title">
          <h1>Hapto also works great on smaller screens</h1>
          <div>
            <img src={footer1} alt="ok" />
            <img src={footer2} alt="ok" />
          </div>
        </div>
        <div>
          <div className="links_containers">
            {data.map((data) => {
              return (
                <div className="links">
                  <h1>{data.title}</h1>
                  <div className="para">
                    {data.content.map((val) => {
                      return <p> {val}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  
  <div className="copywrite">
          <div>
            <h1 className="title">Teamleap</h1>
            <h1>© 2021 all right reserved</h1>
          </div>
          <div className="fb">
            <img  src={social1} alt="facebook" />
            <img src={social2} alt="twitter" />
            <img src={social3} alt="linkdin" />
            <img src={social4} alt="youtube" />
            <img src={social5} alt="instagram" />
          </div>
        </div>
      </div>
      </div>

  )
}
