import React from "react";
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1>My Practice Projects</h1>
            <div className="grid">
                <div className="box" onClick={() => navigate("/counter")}>Counter App</div>
            </div>
            <div className="grid">
                <div className="box" onClick={() => navigate("/todoapp")}>To Do App</div>
            </div>
            <div className="grid">
                <div className="box" onClick={() => navigate("/formvalidationapp")}>Form validation App</div>
            </div>
        </div>

    )
}
export default Home;