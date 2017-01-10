import React from 'react';
import AddFishform from './AddFishform';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishform addFish={this.props.addFish}/>
      </div>
      )
  }
}

export default Inventory;