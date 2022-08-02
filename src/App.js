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
            <h2>Image 72 </h2>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image2})`}}></div>
            <h2>Image 4 </h2>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image3})`}}></div>
            <h2>Image 245 </h2>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image4})`}}></div>
            <h2>Image 125 </h2>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image5})`}}></div>
            <h2>Image 237 </h2>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="photo-container"style={{backgroundImage:`url(${Image6})`}}></div>
            <h2>Image 285 </h2>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image7})`}}></div>
            <h2>Image 85 </h2>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container"style={{backgroundImage:`url(${Image8})`}}></div>
            <h2>Image 18 </h2>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image9})`}}></div>
            <h2>Image 222 </h2>
            <div className="slide">
              <p>Happy birthday Manujith! I hope all your birthday wishes and dreams come true.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="photo-container" style={{backgroundImage:`url(${Image10})`}}></div>
            <h2>Image 278 </h2>
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
