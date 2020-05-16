<p style="text-align: center;" align="center">
  <img width="150" src="/example/example.png?raw=true">
</p>

<p style="text-align: center;" align="center">
  <h1 align="center">React Dummy Image</h1>
</p>

<p style="text-align: center;" align="center">
  A <a href="https://reactjs.org/">React</a> library for creating test images to use as a development model
</p>

<p style="text-align: center;" align="center">
<img src="https://img.shields.io/github/languages/top/JonathanReisCom/react-dummy-image.svg">
<img src="https://img.shields.io/npm/v/react-dummy-image.svg">
<img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
<img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
<img alt="Repository size" src="https://img.shields.io/github/repo-size/jonathanreiscom/react-dummy-image.svg">
<img src="https://isitmaintained.com/badge/resolution/JonathanReisCom/react-dummy-image.svg">
</p>

<!-- [![NPM](https://img.shields.io/github/languages/top/JonathanReisCom/react-dummy-image.svg)](https://www.npmjs.com/package/react-dummy-image)
[![NPM](https://img.shields.io/npm/v/react-dummy-image.svg)](https://www.npmjs.com/package/react-dummy-image)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/JonathanReisCom/react-dummy-image.svg)](https://isitmaintained.com/project/JonathanReisCom/react-dummy-image 'Average time to resolve an issue') -->

<!-- [![npm downloads](https://img.shields.io/npm/dm/react-dummy-image.svg)](https://www.npmjs.com/package/react-dummy-image) -->

<!-- [![CircleCI](https://img.shields.io/circleci/project/github/JonathanReisCom/react-dummy-image/master.svg)](https://circleci.com/gh/JonathanReisCom/react-dummy-image/tree/master) -->

<!-- [![Coverage Status](https://img.shields.io/codecov/c/github/JonathanReisCom/react-dummy-image/master.svg)](https://codecov.io/gh/JonathanReisCom/react-dummy-image/branch/master) -->

<p align="center">
  <a href="#Overview">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Install">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#How">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#License">License</a>
</p>

## <img id="Overview" class="emoji" alt="Overview" height="30" width="30" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png?v8"> Overview

Based on Russell Heimlich's concept at http://dummyimage.com this is a port for React to allow you generate dummy images of any specified dimension.
A simple app to generate dummy/filler images on the fly at whatever size you want.

## <img id="Technologies" class="emoji" alt="Technologies" height="30" width="30" src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png?v8"> Technologies

This project was developed with the following technologies:

- [React](https://reactjs.org/)
- [create-react-library](https://github.com/transitive-bullshit/create-react-library)
- [Dummy Image PHP Script](https://github.com/kingkool68/dummyimage)
- [PropTypes](https://github.com/facebook/prop-types)
- [Shields.io](https://shields.io/)
- [VS Code][vc] with [EditorConfig][vceditconfig]

## <img id="Install" class="emoji" alt="Install" height="30" width="30" src="https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png"> Install

```bash
npm install --save react-dummy-image

or

yarn add react-dummy-image
```

## <img id="How" class="emoji" alt="How To Use" height="30" width="30" src="https://github.githubassets.com/images/icons/emoji/unicode/2139.png?v8"> How To Use

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

## <img id="License" class="emoji" alt="License" height="30" width="30" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png?v8"> License

This project is under the MIT license. See the [LICENSE](https://github.com/JonathanReisCom/react-dummy-image/blob/master/LICENSE) for more information.

---

Made with <img height="15" width="15" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png?v8"> by Jonathan Reis <img height="15" width="15" src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png?v8"> [Get in touch!](https://www.linkedin.com/in/jonathan-reis-com/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

---
