// import React from 'react'
// import { useState } from 'react'



// function Checkout() {

//   //Flag to show drop down menu
//   const [isDropdownVisible,setDropDownVisible]=useState(true)

//   //List of drop down items
//   const [itemList,setItemList]=useState([

// {
//   name:"Equity",
//   value:"equity"
// },
// {
//   name:"KCB",
//   value:"kcb"
// },
// {
//   name:"Co-Operative",
//   value:"coop"
// },
// {
//   name:"I&M",
//   value:"i&m"
// }

//   ]);

//   //Reference/index to user selected element

//   const [selectedItemIndex,setSelectedItemIndex]=useState(null);




//   return (
//     <div className='Checkout'>
//       {/*Custom dropdown */}
//       <div className='dropdown'>
//         {/* Custom dropdown selection */}
//         <div className='custom-dropdown-selection'>
//           {selectedItemIndex !== null? itemList[selectedItemIndex].name:"Choose your bank..."}
//         </div>

//         {/* Dropdown items list */}
//         <div className='items-holder'>
//           {
//             itemList.map((item,index)=>(
//               <div key={item.value} className='dropdown-item'>

//                 {item.name}

//               </div>


//             ))




//           }

//         </div>

//       </div>


//     </div>
//   )
// }


// export default Checkout

import React, { useState } from "react";

function Checkout() {
    const [selectedOption, setSelectedOption] = useState("");

    function handleOptionChange(e) {
        setSelectedOption(e.target.value);
    }

    return (
        <div>
            <div className="formContainer">
            <form className="radioButton">
              <h2>Select payment method</h2>
              
                <div>
                    <input
                        type="radio"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleOptionChange}
                    />
                    Mpesa
                </div>
                <div>  
                    <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleOptionChange}
                    />
                   Bank
                </div>
            </form>
            {selectedOption === "option1" && (
                <form className="mpesaForm">
                    <h4>
                        Pay with Mpesa
                        {/* <input type="text" /> */}
                        
                    </h4>
                   <label>Enter Mpesa number:</label> <input type='number' placeholder="Enter your mpesa number"
                    name='mpesa' />
                    <button type="submit">CHECKOUT</button>
                </form>
                
            )}
            {selectedOption === "option2" && (
                <form className="bankForm"   >
                    <h4>
                        Pay with Bank
                        {/* <input type="text" /> */}
                    </h4>
                    <label className="option">Choose your bank:</label><select>
                    <option>KCB</option>
                    <option>Equity</option>
                    <option>Co-operative</option>
                    <option>Standard Chatered</option>
                    <option>I&M Bank</option>
                    <option>Access Bank</option>
                    </select>
                    <p><label className="enter">Enter your bank account number</label></p> <input type='number'
                     placeholder="Enter Your Account Number"/>

                     <button type="submit">Checkout</button>
                   
            
                </form>
            )}
            </div>
        </div>
    );
}
export default Checkout