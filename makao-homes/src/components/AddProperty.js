import React from 'react'

function AddProperty() {
  return (
    <div>
      <h3>Sell With Us</h3>
      <form>
        Property Name<input type="text" />
        Location<input type="text" />
        Price<input type="text" />
        Image URL<input type="text" />
        Description<textarea></textarea>
        Features<textarea></textarea>
        <button>Submit</button>


      </form>
    </div>
  )
}

export default AddProperty