import React from "react";
import "./Contact.scss"
import fb from "../assets/fb.png"
import li from "../assets/li.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
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

        <a href="https://www.facebook.com/saquib.parvez.1" target="noopener" class="fb"><img src={fb} /></a>
        <a href="https://www.linkedin.com/in/suraj-kumar-yadav-63a880246/" target="noopener" class="twitter"><img src={li} /></a>
        <a href="https://www.instagram.com/yadavanshi_suraj/" target="noopener" class="insta"><img src={insta} /></a>
        <a href="https://github.com/surajkumar9693" target="noopener" class="github"><img src={github} /></a>
      </div>
    </div>
  );
};

export default Contact;