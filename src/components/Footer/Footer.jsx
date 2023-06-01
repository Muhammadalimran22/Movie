import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGem,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";

export default function Footer() {
  const iconSize = 40;

  return (
    <MDBFooter bgColor="black" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>

        <div>
          <Button
            className="me-3"
            variant="outline-light"
            style={{
              backgroundColor: "#3b5998",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaFacebookF color="white" />
          </Button>
          <Button
            className="me-3"
            variant="outline-light"
            style={{
              backgroundColor: "#1DA1F2",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaTwitter color="white" />
          </Button>
          <Button
            className="me-3"
            variant="outline-light"
            style={{
              backgroundColor: "#DB4437",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaGoogle color="white" />
          </Button>
          <Button
            className="me-3"
            variant="outline-light"
            style={{
              backgroundColor: "#E4405F",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaInstagram color="white" />
          </Button>
          <Button
            className="me-3"
            variant="outline-light"
            style={{
              backgroundColor: "#0077B5",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaLinkedin color="white" />
          </Button>
          <Button
            className="me-4"
            variant="outline-light"
            style={{
              backgroundColor: "#24292e",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaGithub color="white" />
          </Button>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FaGem color="secondary" size={24} className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome color="secondary" size={24} className="me-3" />
                New York, NY 10012, US
              </p>
              <p>
                <FaEnvelope color="secondary" size={24} className="me-3" />
                info@example.com
              </p>
              <p>
                <FaPhone color="secondary" size={24} className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <FaPrint color="secondary" size={24} className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://react.com/">
          www.react.com
        </a>
      </div>
    </MDBFooter>
  );
}
