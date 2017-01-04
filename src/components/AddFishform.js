import React from 'react';

class AddFishform extends React.Component {
  render() {
    return (
        <form className="fish-edit">
        <input type="text" placeholder="Fish Name" />
        <input type="text" placeholder="Fish Price" />
        <input type="text" placeholder="Fish Status" />
        <input type="text" placeholder="Fish Desc" />
        <input type="text" placeholder="Fish Image" />
        </form>

      )
  }
}

export default AddFishform;