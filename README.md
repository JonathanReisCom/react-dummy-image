<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

# react-dummy-image

> A library for creating test images to use as a development model

[![NPM](https://img.shields.io/npm/v/react-dummy-image.svg)](https://www.npmjs.com/package/react-dummy-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## :rocket: Technologies

This project was developed with the following technologies:

- [React](https://reactjs.org/)
- [create-react-library](https://github.com/transitive-bullshit/create-react-library)
- [PropTypes](https://github.com/facebook/prop-types)
- [Shields.io](https://shields.io/)
- [VS Code][vc] with [EditorConfig][vceditconfig]

## :information_source: Install

```bash
npm install --save react-dummy-image

or

yarn add react-dummy-image
```

## :information_source: How To Use

```tsx
import React, { Component } from 'react';

import DummyImage from 'react-dummy-image';

const Example = () => {
  return (
    <div className={'mycontainer'}>
      <DummyImage text="Colors" color="#ff0000" textColor="#ffffff" />
      <br />
      <DummyImage text="Format.jpg" format={'jpg'} />
      <br />
      <DummyImage text="Class" className={'myimage'} />
    </div>
  );
};

export default Example;
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/JonathanReisCom/react-dummy-image/blob/master/LICENSE) for more information.

---

Made with ♥ by Jonathan Reis :wave: [Get in touch!](www.linkedin.com/in/jonathan-reis-com)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
