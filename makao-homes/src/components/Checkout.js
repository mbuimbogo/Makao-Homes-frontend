import React from 'react'
import { useState } from 'react'



function Checkout() {

  //Flag to show drop down menu
  const [isDropdownVisible,setDropDownVisible]=useState(true)

  //List of drop down items
  const [itemList,setItemList]=useState([

{
  name:"Equity",
  value:"equity"
},
{
  name:"KCB",
  value:"kcb"
},
{
  name:"Co-Operative",
  value:"coop"
},
{
  name:"I&M",
  value:"i&m"
}

  ]);

  //Reference/index to user selected element

  const [selectedItemIndex,setSelectedItemIndex]=useState(null);




  return (
    <div className='Checkout'>
      {/*Custom dropdown */}
      <div className='dropdown'>
        {/* Custom dropdown selection */}
        <div className='custom-dropdown-selection'>
          {selectedItemIndex !== null? itemList[selectedItemIndex].name:"Choose your bank..."}
        </div>

        {/* Dropdown items list */}
        <div className='items-holder'>
          {
            itemList.map((item,index)=>(
              <div key={item.value} className='dropdown-item'>

                {item.name}

              </div>


            ))




          }

        </div>

      </div>


    </div>
  )
}


export default Checkout