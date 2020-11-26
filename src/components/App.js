import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./Dashboard";
import Signup from "./Login/Signup";
import Login from "./Login/Login";
import ForgotPassword from "./Login/ForgotPassword";
import UpdateProfile from "./UpdateProfile";

import Calendar from "./Calendar/Calendar";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} >
        <div className="w-100">
          <AuthProvider>
            <Router>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/calendar" component={Calendar} />
              </Switch>
            </Router>
          </AuthProvider>
        </div>
      </Container>
      </>
  );
}

export default App;
