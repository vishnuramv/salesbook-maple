import './App.css';
import Header from './components/Header';
import 'materialize-css/dist/css/materialize.min.css';
import Img1 from './assets/img1.png'
import Img2 from './assets/img2.png'
import Img3 from './assets/img3.png'
import Img4 from './assets/img4.png'
import { useEffect, useState } from 'react';

const imgpath = [
  Img1, Img2, Img3, Img4
]

function App() {
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setCurrentImg(currentImg < 3 ? currentImg + 1 : 0), 5000);
    return () => clearTimeout(id);
  }, [currentImg]);
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <div className="app__left">
          <h1>Work With The Top Marketers To Grow Your Business</h1>
          <p>Top 1% marketing experts in your niche with proven ROI results, backed by unbiased monitoring. </p>
          <div className="app_input">
            <i className="material-icons small">search</i>
            <input placeholder="Type your industry" type="text" />
            <button>GET STARTED</button>
          </div>
        </div>
        <div className="app__right">
              <img src={imgpath[currentImg]} alt="carousel img" />
        </div>
      </div>
    </div>
  );
}

export default App;
