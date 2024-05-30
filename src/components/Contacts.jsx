import React from "react";
import {
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

const contactMethods = [
  {
    icon: <AiOutlinePhone style={{ width: 40, height: 40, color: "orange" }} />,
    title: "Call Us",
    details: "Phone : +880258893306",
  },
  {
    icon: <AiOutlineMail style={{ width: 40, height: 40, color: "orange" }} />,
    title: "Email Us",
    details: "Email : advbarcnj@gmail.com",
  },
  {
    icon: (
      <AiOutlineEnvironment
        style={{ width: 40, height: 40, color: "orange" }}
      />
    ),
    title: "Address",
    details: [
      "Post Code - 6300, Thana: Chapainawabganj Sadar",
      "Chapainawabganj Court, Chapainawabganj",
    ],
  },
];

export default function Contacts() {
  return (
    <div className="container mx-auto p-4">
      <h3 className="bg-green-700 text-center text-white py-2 text-lg">
        Contact
      </h3>
      <div className="flex flex-wrap justify-center p-2">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="p-4 m-2 bg-white rounded-md shadow-md w-full sm:w-auto flex flex-col items-center text-center"
          >
            <div className="mb-2">{method.icon}</div>
            <h1 className="text-xl font-bold mb-2">{method.title}</h1>
            {typeof method.details === "string" ? (
              <p className="text-base">{method.details}</p>
            ) : (
              method.details.map((line, idx) => (
                <p key={idx} className="text-base">
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
