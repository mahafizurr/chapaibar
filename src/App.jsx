import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import "./App.css";

import Nav from "./components/Nav";

import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Notice from "./pages/Notice";
import Contact from "./pages/Contact";
import Employee from "./components/Employees";
import Notices from "./components/Notices";
import FilebaseImageUpload from "./Firebase/FirebaseImageUpload";
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

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/exex" element={<FilebaseImageUpload />} />
        <Route path="/membersdirectory" element={<MemberDirectories />} />
        <Route path="/committee/2022" element={<Committee2022 />} />

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
      </Routes>
    </div>
  );
}

export default App;
