import React from 'react';
import './Header.css'
const Header = () => {
  return ( 
    <section className='header'>
    <nav className="nav">
      <h1>Alma</h1>
        <ul className='nav-2'>
          <li>Get Started</li>
          <li>How It Works  </li>
          <li>For Providers</li>
          <li>About Alma</li>
        </ul>
        <button className="btn-2">Login</button>
        <button className="btn">Find a provider</button>
    </nav>
    <div className="text">
      <h1>Alma makes it easy
          quality, affordable mental
          to find high
          health care.</h1>
          <button className='btn-3'>Browse our directory</button>
    </div>
    <div className="box">
      <h5>Subscribe to The Digest</h5>
      <p>Get the latest mental health news in your inbox every other Thursday.</p>
       <button className="btn-4">Sign Up</button>
    </div>
    <div className="text-icon">
      <h3>Want help? Talk to our</h3>
      <h3>Client Matching team</h3>
      <i class="fal fa-arrow-right"></i>
    </div>
    </section>
  )
};

export default Header;
