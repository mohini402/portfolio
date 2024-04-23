import React, { Component } from "react";
import axios from "axios";
import "./contact.css";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false,
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("/api/form", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <section className="contactPage animation">
        <div id="talk">
          <h1 className="talk1">Let's Talk</h1>
          <h3>Looking Forward to hearing from you</h3>
        </div>

        <div className="contact">
          <form className="contactForm" onSubmit={this.formSubmit}>
            <label htmlFor="name" className="firstLabel">
              Name*
            </label>
            <input
              type="text"
              name="Name"
              value={this.state.name}
              className="firstName"
              placeholder="First Name"
              onChange={this.handleName}
              required
            />
            <label htmlFor="email">Enter Your Email*</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="email1"
              placeholder="Your email"
              onChange={this.handleEmail}
              required
            />
            <label htmlFor="message">Enter Your Message</label>
            <textarea
              name="message"
              value={this.state.message}
              className="msg"
              rows={5}
              placeholder="Your message"
              onChange={this.handleMessage}
              required
            />
            <div className={`msg1 ${this.state.sent ? "msgAppear" : ""}`}>
              Message has been sent
            </div>

            <div className="contactBtn">
              <button type="submit" value="Send" className="submitBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
