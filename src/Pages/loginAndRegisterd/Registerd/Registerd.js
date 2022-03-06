import {
  faFileSignature,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Alert, Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import "./Registerd.css";

const Registerd = () => {
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { user, authError, registerUser, signInWithGoogle, isLoading } =
    useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(field, value);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefult();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <>
      <div className="registration-background">
        <div className="container">
          <div className="registration-box">
            <div className="row justify-content-center registration-left align-items-center">
              <div className="col-md-6 ">
                <h1>Please Register</h1>
                {!isLoading && (
                  <>
                    <Form onSubmit={handleLoginSubmit} className="my-5">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faFileSignature} />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            name="name"
                            onBlur={handleOnChange}
                            placeholder="Enter Your Name"
                          />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroup.Text>
                          <Form.Control
                            type="email"
                            name="email"
                            onBlur={handleOnChange}
                            placeholder="Enter email"
                          />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faKey} />
                          </InputGroup.Text>
                          <Form.Control
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            placeholder="Password"
                          />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faKey} />
                          </InputGroup.Text>
                          <Form.Control
                            type="password"
                            name="password2"
                            onBlur={handleOnChange}
                            placeholder="Re-Type Password"
                          />
                        </InputGroup>
                      </Form.Group>
                      <Button variant="dark" type="submit">
                        Register
                      </Button>
                      <br />
                      <Link to="/login">
                        <Button variant="text">
                          Already Registerd? Login Here
                        </Button>
                      </Link>
                    </Form>
                    <hr />
                    <Button onClick={handleGoogleSignIn} variant="light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        {" "}
                        <path d="M12.545,12.151L12.545,12.151c0,1.054,0.855,1.909,1.909,1.909h3.536c-0.607,1.972-2.101,3.467-4.26,3.866 c-3.431,0.635-6.862-1.865-7.19-5.339c-0.34-3.595,2.479-6.62,6.005-6.62c1.002,0,1.946,0.246,2.777,0.679 c0.757,0.395,1.683,0.236,2.286-0.368l0,0c0.954-0.954,0.701-2.563-0.498-3.179c-1.678-0.862-3.631-1.264-5.692-1.038 c-4.583,0.502-8.31,4.226-8.812,8.809C1.945,16.9,6.649,22,12.545,22c6.368,0,8.972-4.515,9.499-8.398 c0.242-1.78-1.182-3.352-2.978-3.354l-4.61-0.006C13.401,10.24,12.545,11.095,12.545,12.151z"></path>
                      </svg>
                    </Button>
                  </>
                )}
                {isLoading && <Spinner animation="border" variant="danger" />}
                {user?.email && (
                  <Alert variant="success">User Created Successfully</Alert>
                )}
                {authError && <Alert variant="danger">{authError}</Alert>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registerd;
