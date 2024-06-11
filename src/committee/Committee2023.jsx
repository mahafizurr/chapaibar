// src/Table.js
import React from "react";

const Committee2023 = () => {
  return (
    <div
      className=" container pt-4"
      style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
    >
      <h3 className="bg-green-700 text-center text-white py-2">
        Previous Committee 2023
      </h3>

      <div className="w-full max-w-screen-lg mx-auto mb-8 overflow-x-auto">
        <table className=" font-bangla text-xl text-center w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">পদের নাম</th>
              <th className="border p-2">বিজ্ঞ এ্যাডভোকেটগণের নাম</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border p-2">সভাপতি</td>
              <td className="border p-2">আলহাজ্ব মোঃ নাজমুল আজম</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="border p-2">সিনিয়র সহ-সভাপতি</td>
              <td className="border p-2">মোহাঃ আব্দুস সাত্তার (১)</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">সহ-সভাপতি</td>
              <td className="border p-2">মোহাঃ আরশাদ আলী</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">সাধারন সম্পাদক</td>
              <td className="border p-2">মোহাঃ একরামুল হক (পিন্টু)</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">সহ-সাধারন সম্পাদক</td>
              <td className="border p-2">মোঃ সাদিকুর রহমান সরকার</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">সহ-সাধারন সম্পাদক</td>
              <td className="border p-2">মোঃ আখেরুল ইসলাম (রাসেল)</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">অর্থ সম্পাদক</td>
              <td className="border p-2">মোঃ গোলাম মোরসেদ</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">গ্রন্থাগার সম্পাদক</td>
              <td className="border p-2">মোহাঃ আবদুল হাদি</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">সাংস্কৃতিক সম্পাদক</td>
              <td className="border p-2">মোসাঃ রহিমা খাতুন </td>
            </tr>

            <tr className="bg-gray-100">
              <td className="border p-2">সদস্য</td>
              <td className="border p-2">আলঃ মোহাঃ জবদুল হক</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">সদস্য</td>
              <td className="border p-2">মোহাঃ মাহমুদুল ইসলাম (কনক)</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">সদস্য</td>
              <td className="border p-2">মোঃ শফিকুল ইসলাম (মিলন)</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">সদস্য</td>
              <td className="border p-2">এম আব্দুস সালাম</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">সদস্য</td>
              <td className="border p-2">মোহাঃ শাহ আলম</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border p-2">সদস্য</td>
              <td className="border p-2">মোহাঃ মাইনুল ইসলাম (২)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Committee2023;
