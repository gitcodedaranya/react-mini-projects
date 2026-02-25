import { useState } from "react";

function Counter(){
   const [ count, setCount] = useState(0);
   const increase = ()=> {
        if(count < 10){
            setCount(count+1);
        }
   };
   const decrease = ()=> {
    if(count>0){
     setCount(count-1);
    }

   };
    return (
        <div>
            <h3>Counter App</h3>
            <button onClick={increase}>+</button>
                {count == 10 && <p>Maximun limit Reached</p>}
            <h4>Count: {count}</h4>
            
            <button onClick={decrease}>-</button>
            <div><button onClick={() => setCount(0)}>Reset</button></div>
        </div>
    )
}

    export default Counter;