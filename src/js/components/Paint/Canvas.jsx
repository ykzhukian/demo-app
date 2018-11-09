import React from 'react';

export default class Canvas extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    // const canvas = this.ref.current;
    // canvas
  }

  render() {
    return (
      <>
        <div>canvas</div>
        <canvas id="myCanvas" width="578" height="200" ref={this.ref}></canvas>
      </>
    );
  }
}