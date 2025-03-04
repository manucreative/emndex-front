import React from "react";

const MainGoogleMap: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <iframe
        title="Google Map"
        width="100%"
        height="585px"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.526873339126!2d36.9001459!3d-1.2415011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15a559874399%3A0xaf90d9a01f75ced0!2sLucky%20Summer%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1741069831183!5m2!1sen!2ske"
      ></iframe>
    </div>
  );
};

export default MainGoogleMap;
