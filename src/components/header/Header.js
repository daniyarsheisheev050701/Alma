import React from 'react';
import s from "../../components/header/Header.module.css"
const Header = () => {
  return ( 
    <section className={s.header}>
    <nav className={s.nav}>
      <h1>Alma</h1>
        <ul className={s.navi}>
          <li>Get Started</li>
          <li>How It Works  </li>
          <li>For Providers</li>
          <li>About Alma</li>
        </ul>
        <button className={s.btn_2}>Login</button>
        <button className={s.btn}>Find a provider</button>
    </nav>
    <div className={s.text}>
      <h1>Alma makes it easy
          quality, affordable mental
          to find high
          health care.</h1>
          <button className={s.btn_3}>Browse our directory</button>
    </div>
    <div className={s.box}>
      <h5>Subscribe to The Digest</h5>
      <p>Get the latest mental health news in your inbox every other Thursday.</p>
       <button className={s.btn_4}>Sign Up</button>
    </div>
    <div className={s.text_icon}>
      <h3>Want help? Talk to our</h3>
      <h3>Client Matching team</h3>
      <i className="fal fa-arrow-right"></i>
    </div>
    </section>
  )
};

export default Header;
