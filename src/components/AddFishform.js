import React from 'react';

class AddFishform extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log('Gonna make some fish!');
    const fish = {
      name
      price
      status
      desc
      image
    }
  }

  render() {
    return (
        <form className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={()} type="text" placeholder="Fish Name" />
        <input ref={()} type="text" placeholder="Fish Price" />
        <select ref={()} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        
        <textarea ref={()} placeholder="Fish Desc" ></textarea>
        <input type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
        </form>

      )
  }
}

export default AddFishform;