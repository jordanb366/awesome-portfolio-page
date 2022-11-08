import React from "react";
import Footer from "../Footer";
// Contact section
export default function Contact() {
  return (
    <div>
      <div className="container">
        <h1>Contact Me</h1>
        <form className="form-group col-sm-12 col-md-8 col-lg-6">
          <div className="form-group">
            <label for="exampleFormControlInput1">Name:</label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name"
              required
            ></input>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address:</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required
            ></input>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>
          </div>
          <button className="btn btn-dark">Submit</button>
        </form>
        <h2 className="pt-4">Or...</h2>
        <a href="mailto:jordan.b3660@email.com">Email me directly!</a>
      </div>
      <Footer />
    </div>
  );
}
