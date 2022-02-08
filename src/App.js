import './App.css';
import line from  "../src/img/line.png"
import logo_1 from  "../src/img/atean.png"
import logo from  "../src/img/Rectangle (1).png"
import img from  "../src/img/Rectangle (2).png"
import img_3 from  "../src/img/Rectangle (3).png"
import img_4 from  "../src/img/Rectangle (4).png"
import img_5 from  "../src/img/Rectangle (5).png"
function App() {
  return (
    <header className="header">
      <section className='footer'>
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
      </section>
      <section className="Alma-w">
        <div className="Why-Alma">
          <h3>Why Alma</h3>
          <h1>Simple, supportive search process</h1>
        </div>
        <div className="Alma">
        <i class="fas fa-list-alt"></i>
          <h5>
          Easy-to-use directory
          </h5>
          <p>An easy-to-use online directory that lets you search and filter on what matters most</p>
        </div>
        <div className='icons'>
            <i class="fal fa-infinity"></i>
            <h3>Free matching support</h3>
        </div>
        <div className='icons-2'>
        <i class="fal fa-comment-alt-lines"></i>
            <h3>In-person or online care</h3>
        </div>
      </section>
    </header>
    
  );
}


export default App;
