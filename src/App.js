import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

      const [value, twovalue] = useState(0);
  
      const add =() =>{
            twovalue( (value) =>value +1);                           
       
    
      }
      
  return (
    <div >
       <button 
   onClick={add}
/>
     <div >
{value}
     </div>
    </div>
  );
}

export default App;
