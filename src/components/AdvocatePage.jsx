import { Link } from "react-router-dom";
import { advocateData } from "./Data";

const ProfileRow = ({ profile }) => (
  <tr className="bg-gray-100">
    <td className="border p-2">{profile.userId}</td>
    <td className="border p-2">{profile.bbcSanadNo}</td>
    <td className="border p-2 text-blue-800">
      <Link to={`/advocates/${profile.userId}`}>{profile.name}</Link>
    </td>
    <td className="border p-2">{profile.mobileNumber}</td>
    <td className="border p-2">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-20 h-20 object-cover"
      />
    </td>
  </tr>
);

const AdvocatePage = () => {
  return (
    <div>
      <div className="w-full max-w-screen-lg mx-auto mt-8 mb-8">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Search with advocate name"
        />
      </div>
      <div className="w-full max-w-screen-lg mx-auto mb-8">
        <table className="text-center w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Serial No:</th>
              <th className="border p-2">BBC Sanad No:</th>
              <th className="border p-2">Name:</th>
              <th className="border p-2">Mobile Number:</th>
              <th className="border p-2">Photo:</th>
            </tr>
          </thead>
          <tbody>
            {advocateData.map((profile) => (
              <ProfileRow key={profile.userId} profile={profile} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <button className="flex bg-blue-500 text-white px-3 py-2 mx-2 my-2 cursor-pointer rounded">
          Previous
        </button>
        <span className="flex bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 mx-2 my-2 cursor-pointer rounded">
          Page 1
        </span>
        <button className="flex bg-blue-500 text-white px-3 py-2 mx-2 my-2 cursor-pointer rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default AdvocatePage;
