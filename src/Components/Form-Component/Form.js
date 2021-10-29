import React, { useState } from 'react'

function Form(props) {
    const [name , setname ] = useState("")
    const [description , setdescription ] = useState("")
    const [price , setprice ] = useState("")
    return (
        <div className="container">
                <div class="form-group">
                    <label for="email">Email Name:</label>
                    <input type="text" class="form-control" placeholder="Enter Name" id="email" onChange={
                        (text)=>{ setname(text.target.value) }
                    }/>
                </div>
                <div class="form-group">
                    <label for="email">Email Description:</label>
                    <input type="text" class="form-control" placeholder="Enter Description" id="email" onChange={
                        (text)=>{ setdescription(text.target.value) }
                    }/>
                </div>
                <div class="form-group">
                    <label for="email">Email Price:</label>
                    <input type="text" class="form-control" placeholder="Enter Price" id="email" onChange={
                        (text)=>{ setprice(text.target.value) }
                    }/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={
                    ()=>{
                        let obj = {}
                        obj.id = Math.floor(Math.random() * 100)
                        obj.name = name
                        obj.description = description
                        obj.price = price
                        props.setProductToState(obj)
                    }
                }>Submit</button>
        </div>
    )
}

export default Form
