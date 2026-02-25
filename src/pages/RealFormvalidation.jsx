import { useState, useEffect } from "react";

function RealFormValiApp(){
    const [formData, setFormData] = useState({email:'', password:''})
    const [errors, setErrors] = useState({});
    const[isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const inputchange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]:e.target.value,
    })
    }

    //validation using useEffect
    useEffect(() => {
        let newErrors={};
        if(!formData.email.includes("@")){
            newErrors.email = "Email must be contain @";
        }
        if(formData.password.length < 6){
            newErrors.password = "password must be 6 characters"
        }
        setErrors(newErrors);
        //Disable button if error exists
        setIsSubmitDisabled(Object.keys(newErrors).length > 0);

    },[formData]);
    const handlesubmit = (e) => {
        e.preventDefault();
        alert("form submited successfully")
    }
    return(
         <div className="form-container">
             <div className="form-box">
            <h2>User Login</h2>
           
                <form className="formvali-form" onSubmit={handlesubmit}>

                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={inputchange} />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input type="password" name="password" placeholder="Password" value={formData.password}  onChange={inputchange}/>
                    {errors.password && <p className="error">{errors.password}</p>}

                    <button className="form-btn" type="submit" disabled={isSubmitDisabled}>Submit</button>
                </form>
                </div>
            
        </div>
    )
}

export default RealFormValiApp;