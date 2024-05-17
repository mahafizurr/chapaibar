// data.js
export const items = [
  {
    key: "home",
    label: "HOME",
    path: "/",
  },
  {
    key: "memberDirectories",
    label: "MEMBER DIRECTORIES",
    path: "/membersdirectory",
  },
  {
    key: "committee",
    label: "COMMITTEE",
    children: [
      {
        key: "presentCommittee",
        label: "PRESENT COMMITTEE",
        path: "/committee",
      },
      {
        key: "previousCommittee",
        label: "PREVIOUS COMMITTEE",
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
            key: "previousCommittee2019",
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
    label: "NOTICE",
    path: "/notice",
  },
  {
    key: "employee",
    label: "EMPLOYEE",
    path: "/employee",
  },
  {
    key: "contact",
    label: "CONTACT",
    path: "/contact",
  },
];
