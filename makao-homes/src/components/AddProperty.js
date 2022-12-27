import React from 'react'

function AddProperty() {
  return (
    <div>
      <div className='addProperty'>
      <h3 id='sellTitle'>Sell With Us</h3>
      <form>
        <label>Property Name</label><input type="text" />
        <label>Location</label><input type="text" />
        <label>Price</label><input type="text" />
        <label>Image URL</label><input type="text" />
        <label>Description</label><textarea></textarea>
        <label>Features</label><textarea></textarea>
        <button type='submit'>Submit</button>


      </form>
      </div>
    </div>
  )
}

export default AddProperty