import React, { Component } from 'react';
import $ from 'jquery'

export default class Contact extends Component {

  changeHeader = () => {
    $('.navsubtitle').text("contact me")
  }

  // emailForm = () => {
  //   (function(){
  //      emailjs.init("user_u8Qhayu3SqsZiP9k15W3w");
  //   })();
  //   window.onload = function() {
  //       document.getElementById('contact-form').addEventListener('submit', function(event) {
  //           event.preventDefault();
  //           this.contact_number.value = Math.random() * 100000 | 0;
  //           emailjs.sendForm('contact_service', 'contact_template', this);
  //       });
  //   }
  // }

  render() {
    return (
      <div className="contactcontainer">
        <form id="contact-form">
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="contact"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  };

  componentDidMount(){
    // {this.emailForm()}
    {this.changeHeader()}
  }


}
