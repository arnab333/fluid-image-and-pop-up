import React, { useState } from 'react';
import {
  CloudsPre,
  DaylightPre,
  FlightPre,
  GrayPre,
  GreenPre,
  CloudsFull,
  DaylightFull,
  FlightFull,
  GrayFull,
  GreenFull
} from './assets/images';
import './App.css';

const images = [
  {
    pre: CloudsPre,
    full: CloudsFull,
    text: 'Clouds Daylight Forest Grass'
  },
  {
    pre: DaylightPre,
    full: DaylightFull,
    text: 'Daylight Environment Forest Idyllic'
  },
  {
    pre: FlightPre,
    full: FlightFull,
    text: 'Flight Landscape Nature Sky'
  },
  {
    pre: GrayPre,
    full: GrayFull,
    text: 'Gray Bridge and Trees'
  },
  {
    pre: GreenPre,
    full: GreenFull,
    text: 'Green Trees Under Blue and Orange Sky During Sunset'
  }
];

const initState = {
  showModal: false,
  fullImage: '',
  imageText: ''
};

function App() {
  const [state, setState] = useState(initState);

  // let previewsRef = React.useRef([]);
  // if (previewsRef.length !== images.length) {
  //   previewsRef = Array(images.length)
  //     .fill()
  //     .map((_, i) => previewsRef[i] || React.createRef());
  // }

  function handleModalOpen(item) {
    setState((prevState) => ({
      ...prevState,
      showModal: true,
      fullImage: item.full,
      imageText: item.text
    }));
  }

  function handleModalClose(event) {
    if (event.target.classList.contains('modal')) {
      setState((prevState) => ({
        ...prevState,
        showModal: false,
        fullImage: '',
        imageText: ''
      }));
    }
  }

  return (
    <React.Fragment>
      <div className="gallery">
        {images.map((item, index) => (
          <div className="img-container" key={item.pre}>
            <img
              id={`image${index}`}
              src={item.pre}
              alt={item.text}
              // ref={previewsRef[index]}
              onClick={() => handleModalOpen(item)}
            />
          </div>
        ))}
      </div>
      <div
        className={`modal ${state.showModal ? 'open' : ''}`}
        onClick={handleModalClose}>
        <img
          src={state.fullImage}
          alt="fullImage"
          className={`full-img ${state.showModal ? 'open' : ''}`}
        />
        <p className="caption">{state.imageText}</p>
      </div>
    </React.Fragment>
  );
}

export default App;
