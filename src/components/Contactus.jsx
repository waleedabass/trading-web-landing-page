import "./Contactus.css";
const Contactus = () => {
  return (
    <div>
      
      <section>
        <div className="text">
          <h1>Contact us</h1>
          <h3>
            If you have any quries regarding our work then feel free to contact
            us.
            <br />
            Our Customer support is available 24/7.
          </h3>

          <div className="msg">
            <form action="">
              <h2>Send us message</h2>
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" />

              <label for="message">Email:</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
          <div className="faq">
            <h1>FAQ's</h1>
            <h3> <a href="">Q: How do I open an account on your trading platform?</a></h3>
            <h3> <a href="">Q: What trading instruments are available on your platform?</a></h3>
            <h3><a href="">Q: How secure is my personal and financial information on your platform?</a> </h3>
            <h3> <a href="">Q: What trading tools and resources do you provide to help me make informed decisions?</a></h3>
          </div>
          <div className="others">
          <a href="">Email</a> 
          <a className="g" href="">Linkdin</a>
          <a className="g" href="">Twitter</a>
          <a className="g" href="">Facebook</a>
          <a className="g" href="">Instagram</a>
          <br />

           </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
