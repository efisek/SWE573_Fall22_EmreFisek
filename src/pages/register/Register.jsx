import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";

<script type="text/javascript" src="//www.turnjs.com/lib/turn.min.js "></script>

const Register = () => {

    let[inputs,setInputs] = useState({
        username:"",
        email:"",
        password:""
    })

    let[err,setErr] = useState(false)

    let handleChange =e =>{
        setInputs(prev=>({
            ...prev, [e.target.name]:e.target.value
        }))        
    };

    console.log(inputs)
    let config = {
headers: {
  "Content-Type": "application/json",
  
  }
}

    let handleClick = async e =>{
        e.preventDefault()

        try{
            await Register(inputs)
            const response = await axios.post("auth/register", inputs, {
                headers: {
                    'Content-Type': "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                    } 
            })
        }catch(err){
            console.log(err)
           
        }
    }

    

    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Register Page!</h1>
                    <p>
                        you can register here
                    </p>
                    <span>Have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right"></div>
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                    <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange}/>                    
                    
                    {/*err && err*/}
                    <button onClick={handleClick}>Register</button>
                </form>
            </div>
        </div>
    );

}

export default Register;