const ContactForm: React.FC = () => {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold gradient-text">Contact Info</h2>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fa fa-map-marker text-pink-500 text-xl"></i>
                <div>
                  <h5 className="gradient-text-2">Address</h5>
                  <p className="text-white">Los Angeles Gournadi, 1230 Bariasl</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fa fa-phone text-green-400 text-xl"></i>
                <div>
                  <h5 className="gradient-text-2">Hotline</h5>
                  <p className="text-white">+1-677-124-44227</p>
                  <p className="text-white">+1-688-356-66889</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fa fa-envelope text-blue-400 text-xl"></i>
                <div>
                  <h5 className="gradient-text-2">Email</h5>
                  <p className="text-white">support@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
  
          {/* Contact Form */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold gradient-text">Get in Touch</h2>
            <p className="text-white mt-4">
              Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            
            <div className="mt-6">
              <form action="#" className="neon-form">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <label htmlFor="Full Names">Full Names</label>
                    <input type="text" placeholder="Name" className="neon-input" />
                    <label htmlFor="Email Address">Email Address</label>
                    <input type="text" placeholder="Email" className="neon-input" />
                    <label htmlFor="Phone number">Phone number</label>
                    <input type="text" placeholder="Phone" className="neon-input" />
                </div>
                <label htmlFor="Phone number">Your Message</label>
                <textarea placeholder="Comment" className="neon-textarea mt-4"></textarea>
                <button type="submit" className="w-full neon-border-button mt-4">Send Message</button>
              </form>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  export default ContactForm;
  