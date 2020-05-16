import React from 'react';

import DummyImage from 'react-dummy-image';
import 'react-dummy-image/dist/index.css';

const App = () => {
  return (
    <div className={'mycontainer'}>
      <DummyImage text="Default" />
      <br />
      <DummyImage text="Sizes" width={150} height={100} />
      <br />
      <DummyImage text="Colors" color="#ff0000" textColor="#ffffff" />
      <br />
      <DummyImage text="Format.jpg" format={'jpg'} />
      <br />
      <DummyImage text="Class" className={'myimage'} />
    </div>
  );
};

export default App;
