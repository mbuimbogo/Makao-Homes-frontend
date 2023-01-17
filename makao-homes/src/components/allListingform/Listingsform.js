import React from 'react'
import Listing from '../listings/Listing'
import './Listingform.css'

function Listingsform({item}) {
   const newItems=item.slice(30,43)
  return (
    
    <div>
        <table>
            <tbody>
                <tr>
                    
                     <th>Name</th>
                      <th>Location</th>
                       <th>Price</th>
                       <th>Property Type</th>
                        {/* <th>Description</th> */}
                </tr>

              {
              newItems.map(newList=>
                <Listing 
                key={newList.id}
                newList={newList}
                />


              )

              }

            </tbody>
             
        </table>


    </div>
  )
}

export default Listingsform