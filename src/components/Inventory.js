import React from 'react';
import AddFishform from './AddFishform';

class Inventory extends React.Component {
  
  
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishform addFish={this.props.addFish}/>
        <button onClick={this.loadSamples}>Load Sample Fishes</button>
      </div>
      )
  }
}

export default Inventory;