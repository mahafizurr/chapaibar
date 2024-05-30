import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="container bg-sky-800 text-white p-4">
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-start md:flex-col md:items-center sm:flex-col sm:items-center space-y-4 lg:space-y-0">
        <div className="w-full lg:w-1/3">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14511.184324473501!2d88.25457573996576!3d24.596232788861435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbb6da98245afd%3A0x40f143bdb8ec586e!2sChapainawabganj%20District%20Judge%20Court!5e0!3m2!1sen!2sus!4v1698080345046!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/3">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300"
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/membersdirectory"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300"
                aria-label="Member Directory"
              >
                Member Directory
              </Link>
            </li>
            <li>
              <Link
                href="/employee"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300"
                aria-label="Employee"
              >
                Employee
              </Link>
            </li>
            <li>
              <Link
                href="/notice"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-300"
                aria-label="Notice"
              >
                Notice
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3">
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="mt-2">
            Chapainawabganj Court, Chapainawabganj <br />
            Post Code - 6300, Thana: Chapainawabganj Sadar <br />
            Mobile Number: +880258893306 <br />
            Email: advbarcnj@gmail.com
          </p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Chapai Nawabganj Bar Association
        </p>
      </div>
    </div>
  );
};

export default Footer;
