import { useState } from "react";

function FormValidationApp(){
    const [formData, setFormData] = useState({
        name:'', 
        email:'' , 
        password:'',
    });
    const [errors, setErrors] = useState({});
    const inputchange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
        };

        const validate = () => {
            let newErrors = {};

            if(!formData.name.trim()){
                newErrors.name = "Name is Required";
            }
            if(!formData.email.trim()){
                newErrors.email = "Email is Required";
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = "Email is Invalid";
            }
            if(!formData.password){
                newErrors.password = "Password is Required";
            } else if(formData.password.length < 6){
                newErrors.password = "Password must be 6 characters";
            } 

            return newErrors;
        };

        const handleSubmit = (e) => {
             e.preventDefault();
            const validationErrors = validate();
            //console.log("L"+validationErrors);
            
           // alert("error: "+Object.keys(validationErrors).length);
            if(Object.keys(validationErrors).length > 0){
                setErrors(validationErrors);
            } else {
                alert('Form Submited Successfully');
                setErrors({});
            }

        };
    
    return (
        <div className="form-container">
             <div className="form-box">
            <h2>Login Form</h2>
           
                <form className="formvali-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={inputchange} />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={inputchange} />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input type="password" name="password" placeholder="Password" value={formData.password}  onChange={inputchange}/>
                    {errors.password && <p className="error">{errors.password}</p>}

                    <button className="form-btn" type="submit">Submit</button>
                </form>
                </div>
            
        </div>
    );

}
export default FormValidationApp;