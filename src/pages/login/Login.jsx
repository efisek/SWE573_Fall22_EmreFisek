import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import AuthContext from "../../context/authContext";

const Login = () => {

    const {login} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext);

    let[inputs, setInputs] = useState({
        email:"",
        password:""
    });

    let[err, setErr]=useState(null);

    let handleChange= (e) => {
        setInputs((prev) =>({
            ...prev, [e.target.name]: e.target.value
        }))
    }


    let handleLogin = async (e) => {
     e.preventDefault()
    
     try{
        await login(inputs)
        await axios.post("/auth/login", inputs
        , {
            headers: {
                "Content-Type" : "application/json",
            },
        }
        )
       // await axios.get("/post/flow")
    }catch(err){
        setErr=true;
    }
    
};
    

    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Login Page!</h1>
                    <p>
                        Abcde
                    </p>
                    <span>No account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="left"></div>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Email" name="email" onChange={handleChange} />
                    <input type="text" placeholder="Password" name="password" onChange={handleChange} />
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login
