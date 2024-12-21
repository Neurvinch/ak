import React from 'react'
import { useState } from 'react'

// import comp and lib


const Fi = () => {

    const [value, twovalue] = useState(0);

    const add =() =>{
          twovalue( value+1);                           
     
          const add2 = ()=>{
            twovalue(()=> value+2)
          }
  
    }
    


// fums

  return (


    <>
<button 
   onClick={add}
/>
<button
    name='2x'
       onClick={add2}
/>


    </>
  )
}

export default Fi