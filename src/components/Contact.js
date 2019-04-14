import React, { Component } from 'react';
import $ from 'jquery'

export default class Contact extends Component {

  changeHeader = () => {
    $('.navsubtitle').text("contact me")
  }

  emailForm = () => {
    // var myform = $("form#myform");
    // myform.submit(function(event){
    // 	event.preventDefault();
    //
    //   // Change to your service ID, or keep using the default service
    //   var service_id = "gmail";
    //   var template_id = "contact_form";
    //
    //   myform.find("button").text("Sending...");
    //   emailjs.sendForm(service_id,template_id,myform[0])
    //   	.then(function(){
    //     	alert("Sent!");
    //        myform.find("button").text("Send");
    //     }, function(err) {
    //        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    //        myform.find("button").text("Send");
    //     });
    //   return false;
    // });

    $('.submit').click(function() {
      alert( "email submitted!" );
      // $('.email_field').val('')
      // $('.message_field').val('')
    });

  }

  render() {
    return (
      <div className="contactcontainer">
        <div className="caption">Leave me your name and what you're looking for! I'll be in touch soon.</div>
        <form id="contact-form" >
          <input type="hidden" name="contact_number" />
          email: <input type="email" name="user_email" className="email_field" />
          name: <input type="text" name="user_name" className="name_field" />
          message: <textarea name="text" className="message_field" />
          <input type="submit" value="Send" className="submit" />
        </form>
      </div>
    );
  };

  componentDidMount(){
    {this.emailForm()}
    {this.changeHeader()}
  }


}
