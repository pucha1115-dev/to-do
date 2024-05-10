//import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import api from '../api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useState,useEffect } from "react";


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(null)
  const navigate = useNavigate()


  useEffect(()=>{
    isLoggedIn();
  },[])

  const isLoggedIn = () => {
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (token) {
      console.log("token available")
      navigate("/")
    }
  }

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault(true);

    try {
      const response = await api.post("/api/token/", {username, password})
        localStorage.setItem(ACCESS_TOKEN, response.data.access)
        localStorage.setItem(REFRESH_TOKEN, response.data.access)
        setLoading(false)
        navigate("/")
        
    } catch(error){
      alert(error)
    } finally{
      setLoading(false)
    }
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="login-container">
            <h2 className="text-center text-black mb-4">Login</h2>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  id="inputEmail"
                  placeholder="Username"
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" disabled={loading? true:false} className="btn btn-primary btn-block" onClick={handleSubmit}>
                  Sign in
                </button>
              </div>
              <div className="text-center mt-3">
                <a href="#">Forgot password?</a> Don't have an account? <Link to="/register">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
