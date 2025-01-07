import React from "react";

import ContactForm from "./ContactForm/page";
import ServiceFeatures from "./ServicesFeature/page";
const Contact: React.FC = () => {
  return (
    <div>
      {/* All Products Section */}
      <ContactForm />

      {/* Newsletter and Instagram Section */}
      <ServiceFeatures />
    </div>
  );
};

export default Contact;
