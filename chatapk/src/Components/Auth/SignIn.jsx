import { useState } from "react";
import { auth, provider } from "../../Firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors] = useState('');

  const navigate = useNavigate();

  // sign in with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user);
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }
  // sign in with facebook
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      console.log(result)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  } 
  // reset password
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Check your email for password reset link");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="sign-in-cont">
      <div className="auth-router">
              <NavLink to='/signup' className='nav-route' >REGISTER</NavLink>
              <NavLink to='/signin' className='nav-route nav-r-1' >LOGIN</NavLink>
          </div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome!</h1>
        <p className="p">Sign in to continue Billie<span>Chats</span></p>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p style={{color: 'red', fontSize: '13px', margin: '1px'}}>{errors.email}</p>}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p style={{color: 'red', fontSize: '13px', margin: '1px'}}>{errors.password}</p>}
        <div className="remember-cont">
        <p>
          <input type="checkbox" className="checkbox" /> <p className="rem">Remember me</p>
        </p>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn">
          Sign in
        </button>
        <NavLink onClick={resetPassword} className='forget-pass' to='/forget-pass'>Forget password?</NavLink>
        <h5 className="or-cont">OR continue with</h5>
      </form>
      <div className="socials">
        <button onClick={GoogleLogin}>
          <FcGoogle className="nav-icon" />
          Sign in with Google
        </button>
        <button onClick={FacebookLogin}>
          <AiFillFacebook className="fb" />
          Sign in with Facebook
        </button>
        <div className="create-acc">
        Don't have an account?
        <NavLink className='create-ac' to="/signup">Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;