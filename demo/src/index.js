import React from 'react';
import { render } from 'react-dom';

import PreloadImage from '../../src';

class Demo extends React.Component {
  render() {
    return (
      <PreloadImage
        style={{
          position: 'relative',
          width: '600px',
          height: '500px',
          backgroundColor: '#222222'
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Ailurus_fulgens_-_Syracuse_Zoo.jpg"
      />
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
