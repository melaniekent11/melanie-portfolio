function Contact() {
  return (
    <div className="contact-container fade-in">
      <h1>Contact Me</h1>

      <p>Feel free to reach out. I’d love to connect!</p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="contact-form"
      >
        {/* Required hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Your Email" required />

        <textarea name="message" placeholder="Your Message" rows="5" required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;