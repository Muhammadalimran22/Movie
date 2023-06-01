import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../../redux/actions/authActions";

function Google({ buttonText }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logginWithGoggle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });

  return (
    <Button
      className="w-25 rounded-5"
      variant="primary"
      onClick={() => logginWithGoggle()}
    >
      {buttonText}
    </Button>
  );
}

export default Google;
