import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { SIGNUP_CONTAINER } from "../styles/Signup.styled";


export default function Signup() {

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log('Error In SignUp', error.message);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });


  return (

    <SIGNUP_CONTAINER showPassword={showPassword}>

      <BackgroundImage />

      <div className="content">
        <Header login />
        
        <div className="body d-flex flex-column align-items-center justify-content-center">

          <div className="text d-flex flex-column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart membership.</h6>
          </div>
          
          <div className="form">
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Email address" name="email" value={formValues.email} onChange={(e) => setFormValues(
                { ...formValues, [e.target.name]: e.target.value })} />
              {
                showPassword ? (
                  <input type="password" className="form-control" placeholder="Password" name="password" value={formValues.password} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />
                )
                  : <button type="button" className="btn fw-bold px-5" onClick={() => setShowPassword(true)}>Get Started</button>
              }
            </div>
          </div>
          {showPassword && <button type="button" className="btn fw-bold px-3 py-2" onClick={handleSignIn}>Log In</button>}
        </div>
      </div>

    </SIGNUP_CONTAINER>

  );
}
