import React from 'react'
import { useState } from 'react'

// import comp and lib


const Fi = () => {

    const [value, twovalue] = useState(0);

    const add =() =>{
          twovalue( value+1);                           
     
  
    }
    


// fums

  return (


    <>
<button 
   onClick={add}
/>


    </>
  )
}

export default Fi