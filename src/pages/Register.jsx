import React, { useState } from "react";
import NavbarComponent from "../components/Header/NavbarComponent";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import Google from "../components/Auth/Google";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        name,
        email,
        password,
      });

      let config = {
        method: "post",
        url: `${process.env.REACT_APP_API}/v1/auth/register`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);

      // navigate("/");

      // Temporary solution
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="vh-100">
        <NavbarComponent />
        <Container className="p-5 mt-5">
          <Card>
            <Card.Body>
              <h3
                className="text-start text-black"
                style={{
                  borderBottom: "1px solid #eee",
                  paddingBottom: "15px",
                }}
              >
                Create Account
              </h3>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-light">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

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

export default Register;
