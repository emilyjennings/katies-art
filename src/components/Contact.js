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
  }

  render() {
    return (
      <div className="contactcontainer">
        <form className="contact-form" >
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="contact" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  };

  componentDidMount(){
    {this.emailForm()}
    {this.changeHeader()}
  }


}
