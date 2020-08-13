import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../Containers/Main";
import Login from "../Containers/Login";
import Register from "../Containers/Register";
import Blog from "../Containers/Blog";
import PrivacyPolicy from "../Containers/PrivacyPolicy";
import Faq from "../Containers/Faq";
import ContactUs from "../Containers/ContactUs";
import Postjob from "../Containers/Postjob";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Main} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/politica" component={PrivacyPolicy} />
    <Route exact path="/faq" component={Faq} />
    <Route exact path="/contactanos" component={ContactUs} />
    <Route exact path="/postjob" component={Postjob} />
  </BrowserRouter>
);

export default App;
