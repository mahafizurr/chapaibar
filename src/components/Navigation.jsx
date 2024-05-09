import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import "../StickyNavbar.css";

const items = [
  {
    key: "home",
    label: "Home",
    path: "/",
  },

  {
    key: "memberDirectories",
    label: "Member Directories",
    path: "/membersdirectory",
  },
  {
    key: "committee",
    label: "Committee",
    children: [
      {
        key: "presentCommittee",
        label: "Present Committee",
        path: "/committee",
      },
      {
        key: "previousCommittee",
        label: "Previous Committee",
        children: [
          {
            key: "previousCommittee2023",
            label: "2023",
            path: "/committee/2023",
          },
          {
            key: "previousCommittee2022",
            label: "2022",
            path: "/committee/2022",
          },
          {
            key: "previousCommittee2021",
            label: "2021",
            path: "/committee/2021",
          },
          {
            key: "previousCommittee2020",
            label: "2020",
            path: "/committee/2020",
          },
          {
            key: "previousCommittee2021",
            label: "2019",
            path: "/committee/2019",
          },
          {
            key: "previousCommittee2018",
            label: "2018",
            path: "/committee/2018",
          },
          {
            key: "previousCommittee2017",
            label: "2017",
            path: "/committee/2017",
          },
          {
            key: "previousCommittee2016",
            label: "2016",
            path: "/committee/2016",
          },
          {
            key: "previousCommittee2015",
            label: "2015",
            path: "/committee/2015",
          },
        ],
      },
    ],
  },
  {
    key: "notice",
    label: "Notice",
    path: "/notice",
  },
  {
    key: "employee",
    label: "Employee",
    path: "/employee",
  },

  {
    key: "contact",
    label: "Contact",
    path: "/contact",
  },
];

const renderMenuItems = (menuItems, setOpenKeys, openKeys) => {
  return menuItems.map((item) => (
    <Menu.Item key={item.key}>
      {item.children ? (
        <Menu.SubMenu
          title={item.label}
          onTitleClick={() => handleOpenChange(item.key, setOpenKeys, openKeys)}
        >
          {renderMenuItems(item.children, setOpenKeys, openKeys)}
        </Menu.SubMenu>
      ) : (
        <Link to={item.path} style={{ textDecoration: "none" }}>
          {item.label}
        </Link>
      )}
    </Menu.Item>
  ));
};

const handleOpenChange = (key, setOpenKeys, openKeys) => {
  const updatedOpenKeys = openKeys.includes(key)
    ? openKeys.filter((k) => k !== key)
    : [...openKeys, key];
  setOpenKeys(updatedOpenKeys);
};

const Navigation = () => {
  const [openKeys, setOpenKeys] = useState([]);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Menu
      mode="horizontal"
      style={{ display: "flex", justifyContent: "center" }}
      openKeys={openKeys}
      onOpenChange={(keys) => setOpenKeys(keys)}
      className={`navbar ${isSticky ? "sticky" : ""}`}
    >
      {renderMenuItems(items, setOpenKeys, openKeys)}
    </Menu>
  );
};

export default Navigation;
