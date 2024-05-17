import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Notice from "./pages/Notice";
import Contact from "./pages/Contact";
import Employee from "./components/Employees";
import Notices from "./components/Notices";
import ProtectedRoute from "./Firebase/ProtectedRoute";
import MemberDirectories from "./components/MemberDirectories";
import Committee2022 from "./committee/Committee2022";

import Alihaider from "./components/em/Alihaider";
import Babu from "./components/em/Babu";
import Badol from "./components/em/Badol";
import Kasem from "./components/em/Kasem";
import Milon from "./components/em/Milon";
import Momin from "./components/em/Momin";
import Nurul from "./components/em/Nurul";
import Palash from "./components/em/Palash";
import Sabbir from "./components/em/Sabbir";
import Sagor from "./components/em/Sagor";
import Samad from "./components/em/Samad";
import Sridoy from "./components/em/Sridoy";
import Srimoty from "./components/em/Srimoty";
import Toymur from "./components/em/Toymur";
import Committee2021 from "./committee/Committee2021";
import Committee2020 from "./committee/Committee2020";
import Committee2019 from "./committee/Committee2019";
import Committee2018 from "./committee/Committee2018";
import Committee2017 from "./committee/Commiittee2017";
import Committee2016 from "./committee/Committee2016";
import Committee2015 from "./committee/Committee2015";
import UserProfileUploader from "./components/UserProfileUploader";
import UserProfileDetails from "./components/UserProfileDetails";
import Login from "./components/Login";
import Committee2023 from "./committee/Committee2023";
import AdvocateDetailsPage from "./components/AdvocateDetailsPage";
import CustomNavbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const isAuthenticated = true;
  return (
    <div>
      <Header />
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/committee" element={<Committee />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/advocates/:id" element={<AdvocateDetailsPage />} />

        <Route
          path="/notice-admin"
          element={
            isAuthenticated ? <ProtectedRoute /> : <Navigate to="/login" />
          }
        />
        <Route path="/exexex" element={<UserProfileUploader />} />
        <Route path="/user/:id" element={<UserProfileDetails />} />
        <Route path="/membersdirectory" element={<MemberDirectories />} />
        <Route path="/committee/2023" element={<Committee2023 />} />
        <Route path="/committee/2022" element={<Committee2022 />} />
        <Route path="/committee/2021" element={<Committee2021 />} />
        <Route path="/committee/2020" element={<Committee2020 />} />
        <Route path="/committee/2019" element={<Committee2019 />} />
        <Route path="/committee/2018" element={<Committee2018 />} />
        <Route path="/committee/2017" element={<Committee2017 />} />
        <Route path="/committee/2016" element={<Committee2016 />} />
        <Route path="/committee/2015" element={<Committee2015 />} />

        <Route path="/alihaider" element={<Alihaider />} />
        <Route path="/babu" element={<Babu />} />
        <Route path="/badol" element={<Badol />} />
        <Route path="/kasem" element={<Kasem />} />
        <Route path="/milon" element={<Milon />} />
        <Route path="/momin" element={<Momin />} />
        <Route path="/nurul" element={<Nurul />} />
        <Route path="/palash" element={<Palash />} />
        <Route path="/sabbir" element={<Sabbir />} />
        <Route path="/sagor" element={<Sagor />} />
        <Route path="/samad" element={<Samad />} />
        <Route path="/sridoy" element={<Sridoy />} />
        <Route path="/srimoty" element={<Srimoty />} />
        <Route path="/toymur" element={<Toymur />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
