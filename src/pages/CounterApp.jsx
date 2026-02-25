import { useState, useEffect } from "react";

function CounterApp(){
    const [count,setCount] = useState(0);
    useEffect(() => {
        console.log("Count Changed: "+count);
    }, [count]); //runs when count change
    return (
        <div className="counterapp-container">
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Increase</button>
            <button onClick={() => setCount(count-1)}>Decrease</button>
        </div>
    )
}
export default CounterApp;