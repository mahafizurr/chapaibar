import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className=" container px-4 py-4 md:py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4 flex items-start">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-gray-700 mr-4 text-xl"
          />
          <div>
            <span className="font-semibold block">Address:</span>
            <p className="text-gray-700">
              Post Code - 6300, Thana: Chapainawabganj Sadar <br />
              Chapainawabganj Court, Chapainawabganj
            </p>
          </div>
        </div>
        <div className="mb-4 flex items-start">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="text-gray-700 mr-4 text-xl"
          />
          <div>
            <span className="font-semibold block">Phone:</span>
            <a
              href="tel:+880258893306"
              className="text-blue-500 hover:underline"
            >
              +880258893306
            </a>
          </div>
        </div>

        <div className="mb-4 flex items-start">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-700 mr-4 text-xl"
          />
          <div>
            <span className="font-semibold block">Email:</span>
            <a
              href="mailto:advbarcnj@gmail.com"
              className="text-blue-500 hover:underline"
            >
              advbarcnj@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
