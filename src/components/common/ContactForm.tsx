import { useConfig } from "../../context/ConfigProvider";

const ContactForm: React.FC = () => {
const { configurations } = useConfig();
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold gradient-text">Contact Info</h2>
            <p className="text-white mt-4">
              If prefered to get us direct or visit and chat one-on-one, you may you the details below, we are also ready to get engaged with you.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fa fa-map-marker text-pink-500 text-xl"></i>
                <div>
                  <h5 className="gradient-text-2">Address</h5>
                  <p className="text-white">{configurations?.["contact physical address"]}</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fa fa-phone text-green-400 text-xl"></i>
                <div>
                  <h5 className="gradient-text-2">Hotline</h5>
                  <p className="text-white">{configurations?.["footer phone1"]}</p>
                  <p className="text-white">{configurations?.["footer phone2"]}</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fa fa-envelope text-blue-400 text-xl"></i>
                <div>
                  <h5 className="gradient-text-2">Email</h5>
                  <p className="text-white">{configurations?.["footer email1"]}</p>
                  <p className="text-white">{configurations?.["footer email2"]}</p>
                </div>
              </li>
            </ul>
          </div>
  
          {/* Contact Form */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold gradient-text">Get in Touch</h2>
            <p className="text-white mt-4">
              We are 24/7 in service and ready to serve you. All messages sent to us are accessible and we must give a feedback according to your guestion, suggestion, and or comment. You only need to fill the form balow and hit Send.
            </p>
            
            <div className="mt-6">
              <form action="#" className="neon-form">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Full Name */}
                    <div className="flex flex-col">
                      <label htmlFor="full-name" className="text-white font-sm">
                        Full Names
                      </label>
                      <input type="text" id="full-name" placeholder="Name" className="neon-input" />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-white font-sm">
                        Email Address
                      </label>
                      <input type="email" id="email" placeholder="Email" className="neon-input" />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-white font-sm">
                        Phone Number
                      </label>
                      <input type="tel" id="phone" placeholder="Phone" className="neon-input" />
                    </div>
                    
                    </div>

                  <div className="flex flex-col mt-8">
                  <label htmlFor="userMessage" className="text-white font-sm">
                  Message
                  </label>
                <textarea placeholder="Enter your Message" className="neon-textarea h-56 md:h-56 lg:h-56"></textarea>
                </div>

                <button type="submit" className="w-full neon-border-button mt-4">Send Message</button>
              </form>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  export default ContactForm;
  