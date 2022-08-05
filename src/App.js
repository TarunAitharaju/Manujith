import './index.css'
import './App.css';
import Image1 from '../src/images/1.JPG'
import Image2 from '../src/images/2.JPG'
import Image3 from '../src/images/3.JPG'
import Image4 from '../src/images/4.JPG'
import Image5 from '../src/images/5.JPG'
import Image6 from '../src/images/6.JPG'
import Image7 from '../src/images/7.JPG'
import Image8 from '../src/images/8.JPG'
import Image9 from '../src/images/9.JPG'
import Image10 from '../src/images/10.JPG'

function App() {
  return (
    <div>
      <h1>Manujith Gallery</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image1})`}}></div>    
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image2})`}}></div>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image3})`}}></div>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image4})`}}></div>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image5})`}}></div>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="photo-container"style={{backgroundImage:`url(${Image6})`}}></div>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image7})`}}></div>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container"style={{backgroundImage:`url(${Image8})`}}></div>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image9})`}}></div>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image10})`}}></div>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
