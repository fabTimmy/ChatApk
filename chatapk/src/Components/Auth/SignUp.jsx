import { useState } from "react";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState("");
  const [isVisible, setIsVisible] = useState("");

  const navigate = useNavigate();
  const inputType = visible ? "text" : "password";
  const inputTypes = isVisible ? "text" : "password";

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
  const validateCheck = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== confirmPassword) {
      setIsError("Confirm Password does not match with password");
    } else {
      setIsError("");
    }
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
            <NavLink to="/signup" className="nav-route">
              REGISTER
            </NavLink>
            <NavLink to="/signin" className="nav-route nav-r-1">
              LOGIN
            </NavLink>
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
              <div className="pwd-cont">
                <input
                  placeholder="Create Password"
                  value={password}
                  type={inputType}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="eyes" onClick={() => setVisible(!visible)}>
                  {visible ? (
                    <AiOutlineEye className="eye-icon" />
                  ) : (
                    <AiOutlineEyeInvisible className="eye-icon" />
                  )}
                </div>
              </div>
              <label htmlFor="confirm-pwd">Confirm password</label>
              <div className="pwd-cont">
                <input
                  type={inputTypes}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  name="confirmpass"
                  onChange={(e) => validateCheck(e)}
                />
                <div className="eyes" onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? (
                    <AiOutlineEye className="eye-icon" />
                  ) : (
                    <AiOutlineEyeInvisible className="eye-icon" />
                  )}
                </div>
                <div className="isError">
              {isError}
            </div>
              </div>
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
