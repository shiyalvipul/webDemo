import React from 'react';

 const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className="contact-us-container">
        <div className="left-section">
          <div className="content">
            <h2 className="content-title">Contact Us</h2>
            <p className="content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.Ut eget imperdiet neque.
              In volutpat ante semper diam molestie, et aliquam erat laoreet.Sed sit amet arcu aliquet, molestie justo at, auctor nunc pretium tempor.
            </p>
          </div>
        </div>
        <div className="right-section">
          <form className="contact-form">
            <div className="outer-wrapper">
              <input type="text" name="name" className="input-field" placeholder="Name"/>
            </div>
            <div className="outer-wrapper">
              <input type="text" name="name" className="input-field" placeholder="Email Address"/>
            </div>
            <div className="outer-wrapper">
              <textarea id="" name="message" placeholder="Message" className="input-field" spellCheck="false">
              </textarea>
            </div>
            <div className="contact-form-button">
              <button className="contact-form-submit-button">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
