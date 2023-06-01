import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import NavbarComponent from "../components/Header/NavbarComponent";
import Google from "../components/Auth/Google";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    dispatch(login(data, navigate));
  };

  return (
    <>
      <div className="vh-100">
        <NavbarComponent />

        <Container className="p-5 mt-5">
          <Card className="rounded-0">
            <Card.Body>
              <h3
                className="text-start text-black"
                style={{
                  borderBottom: "1px solid #eee",
                  paddingBottom: "15px",
                }}
              >
                Login In to Your Account
              </h3>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-light">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-light">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col className="text-center">
                    <Button
                      variant="danger"
                      type="submit"
                      className="rounded-5 w-25"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
              <h5 className="text-center">or</h5>
              <Row>
                <Col className="text-center">
                  <Google buttonText="Login with Google 🚀" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Login;
