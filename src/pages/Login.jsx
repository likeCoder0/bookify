import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";

const LoginPage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      //navigate to home
      navigate('/');
    }
  }, [firebase,navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login In a user...");
    const result = await firebase.signinUserWithEmailAndPassword(
      email,
      password
    );
    console.log("Successful", result);
  };
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <h1 className="mt-5 mb-5">OR</h1>
        <Button variant="danger" onClick={firebase.signinWithGoogle}>
          Sigin with Google
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
