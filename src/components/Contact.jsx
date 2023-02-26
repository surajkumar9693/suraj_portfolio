import React from "react";
import "./Contact.scss"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Suraj_kumar" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="surajkumargt7262@gmail.com" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
      <div class="social-icons">

      <a href="https://www.facebook.com/suraj.yadavanshi.7568" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com/yadavanshi_suraj/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/in/suraj-kumar-yadav-63a880246/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/surajkumar9693" target={"blank"}>
            <AiFillGithub />
          </a> </div>
    </div>
  );
};

export default Contact;