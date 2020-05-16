import React from 'react';

import DummyImage from 'react-dummy-image';
import 'react-dummy-image/dist/index.css';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <DummyImage text="Text" />
      <br />
      <DummyImage text="Colors" color="#ff0000" textColor="#ffffff" />
      <br />
      <DummyImage text="Sizes" width={200} height={200} />
    </div>
  );
};

export default App;
