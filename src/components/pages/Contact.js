import React from "react";
import Footer from "../Footer";
export default function Contact() {
  return (
    <div>
      <div className="container">
        <h1>Contact Page</h1>
        <form className="form-group col-6">
          <div className="form-group">
            <label for="exampleFormControlInput1">Name:</label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name"
            ></input>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-dark">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
