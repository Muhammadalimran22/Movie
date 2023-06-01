import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "../../components/Header/NavbarComponent";
import "./Users.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../redux/actions/authActions";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(navigate, null, null));
  }, [dispatch, navigate]);

  return (
    <>
      <NavbarComponent />
      <Container className="p-5 vh-100 mt-5">
        <h1 className="text-center text-black">
          Name: {user?.name} <br />
          Email: {user?.email}
        </h1>
        <h1 className="text-center text-black">
          This page only can be accessed by user having login
        </h1>
      </Container>
    </>
  );
}

export default Dashboard;
