# react-input-time

[![npm](https://img.shields.io/npm/v/react-input-time.svg)](https://www.npmjs.com/package/react-input-time)
[![Build Status](https://travis-ci.org/jwilsson/react-input-time.svg?branch=master)](https://travis-ci.org/jwilsson/react-input-time)
[![Coverage Status](https://coveralls.io/repos/jwilsson/react-input-time/badge.svg?branch=master)](https://coveralls.io/r/jwilsson/react-input-time?branch=master)

A simple, yet customizable, React component for time selection.

# Install

_Requires React 16 or later_

```sh
npm install --save react-input-time
```

or

```sh
yarn add react-input-time
```

# Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import TimeInput from 'react-input-time';

const App = () => (
  <TimeInput
    className="input-time"
    initialTime="13:37"
    onChange={(event, value) => {}}
  />
);

ReactDOM.render(<App />, document.querySelector('.app'));
```

# Options

- `initialTime`: The initial time value, required.
- `input`: A custom `<input>` element to use instead of the default one.
- `onChange`: onChange handler, will be passed the new value and the complete `SyntheticEvent` object.

All other props will be passed straight through to the rendered DOM element.

# Acknowledgments

Originally based on logic from https://github.com/dima-bu/react-input-time, but heavily stripped down.
