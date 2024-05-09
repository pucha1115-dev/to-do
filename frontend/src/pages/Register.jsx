//import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="login-container">
            <h2 className="text-center text-black mb-4">Register</h2>
            <form>
              <div className="mb-3">
                <input className="form-control" placeholder="Name" required />
              </div>
              <div className="mb-3">
                <input className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
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
