import React from 'react';
import { render } from 'react-dom';

import PreloadImage from '../../src';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <PreloadImage
          style={{
            position: 'relative',
            width: '600px',
            height: '500px',
            backgroundColor: '#222222'
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Ailurus_fulgens_-_Syracuse_Zoo.jpg"
        />

        <PreloadImage
          style={{
            position: 'relative',
            width: '25vw',
            height: '25vw',
            backgroundColor: '#222222'
          }}
          innerStyle={{
            backgroundSize: '50%',
            backgroundPosition: 'left',
            backgroundRepeat: 'repeat'
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Ailurus_fulgens_-_Syracuse_Zoo.jpg"
        />
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
