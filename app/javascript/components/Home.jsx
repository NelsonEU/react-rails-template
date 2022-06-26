

import React, { Component } from 'react';
import Wip from 'images/wip.jpeg'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h1 className="title">WIP</h1>
        <img class="wip" src={Wip}  alt="wip" />
      </div>
    )
  }

}

export default Home;
