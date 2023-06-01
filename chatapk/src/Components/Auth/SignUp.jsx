import { useState } from "react";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <div className="register-cont">
        <div className="signup-img">
          <div className="signup-img-text">
            <h1>CHATTER</h1>
            <p>
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
          </div>
        </div>
        <div className="sign-in-cont">
          <div className="auth-router">
              <NavLink to='/signup' className='nav-route' >REGISTER</NavLink>
              <NavLink to='/signin' className='nav-route nav-r-1' >LOGIN</NavLink>
          </div>
          <form onSubmit={handleSubmit}>
            <h1>Register as a Writer/Reader</h1>
            <div className="names-cont">
              <div>
                <label htmlFor="First">First name</label>
                <input type="text" placeholder="First name" className="names" />
              </div>
              <div>
                <label htmlFor="LastName">Last name</label>
                <input type="text" placeholder="Last name" className="names" />
              </div>
            </div>
            <div className="names-cont-1">
              <label for="cars">You are joining as?</label>

              <select name="profession" id="profession">
                <option value="writer">Writer</option>
                <option value="blogger">Blogger</option>
                <option value="student">Student</option>
              </select>

              <label htmlFor="email">Email address</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="pwd">Password</label>
              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="confirm-pwd">Confirm password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <button type="submit" className="btn">
              Create account
            </button>
          </form>
          <div className="socials">
            <button>
              <FcGoogle className="nav-icon" />
              Sign up with google
            </button>
            <button className="fbb">
              <AiFillFacebook className="fb" />
              Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
