import React from 'react'


function Listing({newList}) {

    const {name,location,price,property_type}=newList

  return (
    <tr>
       
        <td>{name}</td>
        <td>{location}</td>
        <td>{price}</td>
        <td>{property_type}</td>
        {/* <td>{description}</td> */}
    </tr>
  )
}

export default Listing