import { useState } from "react";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState('')
  const [errors] = useState('');

  const navigate = useNavigate();
  const inputType = visible ? 'text' : 'password';

  // sign in with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/blogs')
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

    <div className="sign-up-cont-2">
      <div className="auth-router">
              <NavLink to='/signup' className='nav-route' >REGISTER</NavLink>
              <NavLink to='/signin' className='nav-route nav-r-1' >LOGIN</NavLink>
          </div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        <div className="names-cont-2">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email"
        />
        {errors.email && <p style={{color: 'red', fontSize: '13px', margin: '1px'}}>{errors.email}</p>}
        <label htmlFor="pwd">Password</label>
        <div className="pwd-cont">
        <input
          placeholder="password"
          type={inputType}
          id="pwd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          />
        <div className="eyes" onClick={() => setVisible(!visible)}>
          {visible ? <AiOutlineEye className="eye-icon"/> : <AiOutlineEyeInvisible className="eye-icon"/>}
        </div>
        </div>
        {errors.password && <p style={{color: 'red', fontSize: '13px', margin: '1px'}}>{errors.password}</p>}
        </div>
        
        <button onClick={handleSubmit} type="submit" className="btn">
          Log in
        </button>
      </form>
    </div>
      </div>
    </section>
  );
};

export default SignIn;