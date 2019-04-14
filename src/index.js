import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// var template_params = {
//    "user_email": "user_email_value",
//    "contact_number": "contact_number_value",
//    "contact": "contact_value"
// }
//
// var service_id = "default_service";
// var template_id = "contact_form";
// emailjs.send(service_id, template_id, template_params);
