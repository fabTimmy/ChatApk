import { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listener();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out successful");
        navigate('/logged-out')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button className="btn" onClick={userSignOut}>Sign out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
