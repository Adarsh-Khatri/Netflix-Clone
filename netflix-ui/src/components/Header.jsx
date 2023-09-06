import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { HEADER_CONTAINER } from "../styles/Header.styled";

export default function Header(props) {

  const navigate = useNavigate();

  return (

    <HEADER_CONTAINER className="d-flex justify-content-between align-items-center">

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <button type="button" className="btn btn-outline-danger fw-bold" onClick={() => navigate(props.login ? "/login" : "/signup")}>{props.login ? "Log In" : "Sign In"}</button>

    </HEADER_CONTAINER>
  );
}


