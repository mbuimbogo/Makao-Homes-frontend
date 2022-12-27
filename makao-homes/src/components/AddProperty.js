import React,{useState} from 'react'

function AddProperty() {
  const [name,setName]=useState('')
  const [location,setLocation]=useState('')
  const[price,setPrice]=useState('')
  const[ImageURL,setImageURL]=useState('')
  const[description,setDescription]=useState('')
  const[features,setFeature]=useState('')


  function handleFormSubmit(e){
    e.preventDefault()
    const propertyData={
      name:name,
      location:location,
      price:price,
      ImageURL:ImageURL,
      description:description,
      features:features,
    }
    // console.log(propertyData)
    fetch(' http://localhost:4000/newproperty',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(propertyData)

    })
    .then((r)=>r.json())
    .then((newData)=>console.log(newData))

  }
  return (
    <div>
      <div className='addProperty'>
      <h3 id='sellTitle'>Sell With Us</h3>
    <form onSubmit={handleFormSubmit}>
        <label>Property Name</label><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label>Location</label><input type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/>
        <label>Price</label><input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
        <label>Image URL</label><input type="text" value={ImageURL} onChange={(e)=>setImageURL(e.target.value)} />
        <label>Description</label><textarea input="true" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <label>Features</label><textarea input="true" value={features} onChange={(e)=>setFeature(e.target.value)}></textarea>
        <button type='submit'>Submit</button>


      </form>
      </div>
    </div>
  )
}

export default AddProperty