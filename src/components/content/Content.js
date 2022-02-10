import React from 'react';
import './Content.css'
import line from  "../../img/line.png"
import logo_1 from  "../../img/atean.png"
import logo from  "../../img/Rectangle (1).png"
import img from  "../../img/Rectangle (2).png"
import img_3 from  "../../img/Rectangle (3).png"
import img_4 from  "../../img/Rectangle (4).png"
import img_5 from  "../../img/Rectangle (5).png"
import profil from "../../img/profil.png"
function content() {
  return (
    <section>
    <div className='oscar'>
      <h1>Find therapists at Alma in network with:</h1>
      <img src={logo_1}/>
      <img src={logo}/>
      <img src={img} />
      <img src={img_3} />
      <img src={img_4} />
      <img src={img_5} />
    </div>
    <img src={line}/>
    <section className="Alma-w">
        <div className="Why-Alma">
          <h3>Why Alma</h3>
          <h1>Simple, supportive search process</h1>
        </div>
        <div className="Alma">
          <h5>
          <i className="fas fa-list-alt"></i>
          Easy-to-use directory
          </h5>
          <p>An easy-to-use online directory that lets you search and filter on what matters most</p>
        </div>
        <div className='icons'>
            <h3 > <i className="fal fa-infinity"></i>Free matching support</h3>
        </div>
        <div className='icons-2'>
            <h3><i className="fal fa-comment-alt-lines"></i>In-person or online care</h3>
        </div>
        <img className="profil" src={profil} />
      
          
      </section>
  </section>
  
  ) 
}

export default content;
