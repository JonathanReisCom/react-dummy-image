import React from 'react';

import DummyImage from 'react-dummy-image';
import 'react-dummy-image/dist/index.css';

const App = () => {
  return (
    <>
      <DummyImage text="Create React Library Example 😄" />
      <DummyImage format="jpg" />
    </>
  );
};

export default App;
