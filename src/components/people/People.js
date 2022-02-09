import React from 'react';
import "../../components/people/People.css"
import img1 from "../../img/People.png"
import img2 from "../../img/Rectangle3.png"
import img3 from "../../img/Rectangle4.png"
import img4 from "../../img/Rectangle5.png"
import img5 from "../../img/Rectangle6.png"
import img6 from "../../img/Rectangle7.png"
import img7 from "../../img/Rectangle8.png"
import img8 from "../../img/Rectangle9.png"
import img9 from "../../img/Rectangle10.png"
import img10 from "../../img/Rectangle11.png"

function People() {
  return (
      <div className='peoples'>
          <div className="people">
          <img src={img1}/>
          <img src={img2}/>
          <img src={img3}/>
          <img src={img4}/>
          <img src={img5}/>
          </div>
          <div className='people-2'>
          <img src={img6}/>
          <img src={img7}/>
          <img src={img8}/>
          <img src={img9}/>
          <img src={img10}/>
          </div>
      </div>
  )
}

export default People;
