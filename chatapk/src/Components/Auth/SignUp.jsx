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
        navigate('/signin')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <div className="signup-img">
        <img src="image.png" alt="" />
      </div>
      <div className="sign-in-cont">

        <form onSubmit={handleSubmit}>
          <h1>Register as a Writer/Reader</h1>
          <div className="names-cont">
            <div>
          <label htmlFor="First">First name</label>
          <input
            type="text"
            placeholder="First name"
            className="names"
          />
            </div>
          <div>
          <label htmlFor="LastName">Last name</label>
          <input
            type="text"
            placeholder="Last name"
            className="names"
          />
          </div>
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="remember-cont">
        <p>
          <input type="checkbox" className="checkbox" /> <p className="rem">Remember me</p>
        </p>
        </div>
          <button type="submit" className="btn">
            Sign up
          </button>
          <h5 className="or-cont">OR continue with</h5>
        </form>
        <div className="socials">
          <button>
            <FcGoogle className="nav-icon"/>
            Sign up with Google
          </button>
          <button>
            <AiFillFacebook className="fb" />
            Sign up with Facebook
          </button>
        </div>
        <div className="create-acc">
        Already have an account?
        <NavLink className='create-ac' to="/signin">Sign in</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
