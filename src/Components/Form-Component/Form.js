import React, { useState } from 'react'

function Form(props) {
    const [name , setname ] = useState("")
    const [description , setdescription ] = useState("")
    const [price , setprice ] = useState("")
    return (
        <div className="container">
                <div className="form-group">
                    <label htmlFor="email">Email Name:</label>
                    <input type="text" className="form-control" value={name} placeholder="Enter Name" id="email" onChange={
                        (text)=>{ 
                            console.log(text.target.value);
                            setname(text.target.value) 
                        }
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Description:</label>
                    <input type="text" className="form-control" placeholder="Enter Description" value={description} id="email" onChange={
                        (text)=>{ setdescription(text.target.value) }
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Price:</label>
                    <input type="text" className="form-control" placeholder="Enter Price" value={price} id="email" onChange={
                        (text)=>{ setprice(text.target.value) }
                    }/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={
                    ()=>{
                        // let obj = {}
                        // obj.id = Math.floor(Math.random() * 100)
                        // obj.name = name
                        // obj.description = description
                        // obj.price = price
                        // props.setProductToState(obj)
                        let id = Math.floor(Math.random() * 100)
                        props.setProductToState({id,name,description,price})

                        
                    }
                }>Submit</button>
        </div>
    )
}

export default Form
