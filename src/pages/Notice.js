import React from "react";
import Notices from "../components/Notices";
import FirebaseImageList from "../Firebase/FirebaseImageList";

const Notice = () => {
  return (
    <div>
      <Notices />
      <FirebaseImageList />
    </div>
  );
};

export default Notice;
