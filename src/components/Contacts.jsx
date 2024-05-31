import React from "react";
import {
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

const contactMethods = [
  {
    icon: <AiOutlinePhone className="text-orange-500 w-10 h-10" />,
    title: "Call Us",
    details: "Phone: +880258893306",
  },
  {
    icon: <AiOutlineMail className="text-orange-500 w-10 h-10" />,
    title: "Email Us",
    details: "Email: advbarcnj@gmail.com",
  },
  {
    icon: <AiOutlineEnvironment className="text-orange-500 w-10 h-10" />,
    title: "Address",
    details: [
      "Post Code - 6300, Thana: Chapainawabganj Sadar",
      "Chapainawabganj Court, Chapainawabganj",
    ],
  },
];

export default function Contacts() {
  return (
    <div className="container mx-auto p-6">
      <h3 className="text-2xl font-bold text-center text-white bg-green-700 py-4 rounded-lg shadow-md mb-6">
        Contact
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center text-center transform transition-transform hover:scale-105"
          >
            <div className="mb-4">{method.icon}</div>
            <h1 className="text-xl font-semibold mb-2 text-gray-800">
              {method.title}
            </h1>
            {typeof method.details === "string" ? (
              <p className="text-base text-gray-600">{method.details}</p>
            ) : (
              method.details.map((line, idx) => (
                <p key={idx} className="text-base text-gray-600">
                  {line}
                </p>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
