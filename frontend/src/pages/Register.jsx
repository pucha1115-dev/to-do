//import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api'
import {ACCESS_TOKEN} from '../constants'


const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem(ACCESS_TOKEN)
    if(token){
      navigate("/")
    }
  },[])

  const handleSubmit = async (e) =>{
    setLoading(true);
    e.preventDefault();

    try{
      const response = await api.post("/api/user/register/", {username, password, email});
      console.log(response.data)
        setLoading(false)
        navigate("/login")
        
      
    } catch(error) {
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
            <h2 className="text-center text-black mb-4">Register</h2>
            <form>
              <div className="mb-3">
                <input className="form-control" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="mb-3">
                <input className="form-control" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.email)} required />
              </div>
              <div className="mb-3">
                <input
                
                  type="password"
                  className="form-control"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
              <div className="text-center mt-3">
                <p className="text-black">Already registered? Login</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
