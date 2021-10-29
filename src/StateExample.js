import React , { useState } from 'react'

function StateExample() {
    const [ logo , setlogo ] = useState("fita")
  return (
    <div>
      <h1>{logo}</h1>
      <input type="text" onChange={
        (text)=>{
          setlogo(text.target.value)
        }
      }/>
    </div>
  )
}

export default StateExample
