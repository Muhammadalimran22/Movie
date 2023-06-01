import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import DetailMovie from "./pages/users/DetailMovie";
import Dashboard from "./pages/users/Dashboard";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoToken from "./components/Auth/NoToken";
import Protected from "./components/Auth/Protected";
import Footer from "./components/Footer/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <NoToken>
                  <Login />
                </NoToken>
              }
            />

            <Route
              path="/register"
              element={
                <NoToken>
                  <Register />
                </NoToken>
              }
            />

            <Route path="/search" element={<SearchPage />} />
            <Route
              path="users/detail/:id"
              element={
                <Protected>
                  <DetailMovie />
                </Protected>
              }
            />
            <Route
              path="/users/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
          </Routes>
          <ToastContainer theme="colored" />
          <Footer />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
