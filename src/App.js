import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect,useReducer } from 'react';
function App() {

      const [value, twovalue] = useState(0);
  

      
      const add =() =>{
            twovalue( (value) =>value +1);                           
      
    
      }
      
      const add2 = ()=>{
        twovalue(value+2)
      }

      
      
  return (
    <div >
       <button 
   onClick={add}
/>
     <div >
{value}
     </div>



     
     <button
    name='2x'
       onClick={add2}
/>

    </div>
  );
}

export default App;
