import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { LOGIN_CONTAINER } from "../styles/Login.styled";
import toast from "react-hot-toast";
import { makingReadableError } from "../utils/errorHandler";

export default function Login() {

  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      let err = makingReadableError(error)
      toast.error(err)
    }
  };


  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <LOGIN_CONTAINER>

      <BackgroundImage />

      <div className="content">
        <Header />

        <div className="form-container d-flex flex-column align-items-center justify-content-center">

          <div className="form d-flex flex-column align-items-center justify-content-center">
            <div className="title">
              <h3 className="fw-bold">Login</h3>
            </div>
            <div className="container d-flex flex-column">

              <input type="text" className="form-control" placeholder="Email" name="email" value={formValues.email} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />

              <input type="password" className="form-control" placeholder="Password" name="password" value={formValues.password} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />

              <button type="button" className="btn fw-bold" onClick={handleLogin}>Login to your account</button>

            </div>
          </div>

        </div>
      </div>

    </LOGIN_CONTAINER>
  );
}

