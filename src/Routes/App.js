import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Main from '../Containers/Main';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import Blog from '../Containers/Blog';
import PrivacyPolicy from '../Containers/PrivacyPolicy';
import Frequentquestions from '../Containers/Frequentquestions';
import ContactUs from '../Containers/ContactUs';


const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/politica" component ={PrivacyPolicy} />
        <Route exact path="/preguntasfrecuentes" component ={Frequentquestions}/>
        <Route exact path="/contactanos" component ={ContactUs}/>      
    </BrowserRouter>

)

export default App;