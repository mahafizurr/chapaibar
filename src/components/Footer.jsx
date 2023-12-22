import React from "react";

const Address = () => {
  return (
    <div>
      <h1 className="text-2xl text-yellow-500 ">Address</h1>
      <br />

      <p className="text-lg">Chapainawabganj Court, Chapainawabganj</p>
      <p className="text-lg">Post Code - 6300, Thana: Chapainawabganj Sadar</p>
      <p className="text-lg">Mobile Number: +880258893306</p>
      <p className="text-lg">Email: advbarcnj@gmail.com</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-4 md:mx-8 lg:mx-16 xl:mx-24">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4 lg:mr-8">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14511.184324473501!2d88.25457573996576!3d24.596232788861435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbb6da98245afd%3A0x40f143bdb8ec586e!2sChapainawabganj%20District%20Judge%20Court!5e0!3m2!1sen!2sus!4v1698080345046!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="w-full md:w-1/2">
              <Address />
            </div>
          </div>

          <p className="text-center mt-4">
            &copy; {new Date().getFullYear()} Chapai Nawabganj Bar Association
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
