import React , { useEffect, useState } from 'react'

function StateExample(props) {
    const [ logo1 , setlogo1 ] = useState("fita")
    const [ logo2 , setlogo2 ] = useState("fita")


    
  return (
    <div>
      <h1>{logo1}</h1>
      <input type="text" onChange={
        function(text){
          setlogo1(text.target.value)
        }
      }/>
      <h1>{logo2}</h1>
      <input type="text" onChange={
        function(text){
          setlogo2(text.target.value)
        }
      }/>
    </div>
  )
}

export default StateExample
