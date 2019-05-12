import React, { Component } from 'react';
import $ from 'jquery'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  // Code for the contact form submission given by Netlify documentation
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });


// changes the header subtitle
  changeHeader = () => {
    $('.navsubtitle').text("contact me")
    $('.navstick').hide()
  }

// gives a confirmation that the email was sent

  emailForm = () => {
    $('.submit').click(function() {
      alert( "email submitted!" );
    });

  }

// contact form as per code given by EmailJS, thwe library used for this form
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contactcontainer">
        <div className="formcaption">Leave me your name and what you're looking for! I'll be in touch soon.</div>
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button id="submit" type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
    {this.emailForm()}
  }


}
