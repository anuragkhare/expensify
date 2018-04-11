import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const subpages = [
    {
      to: "/",
      name: "Home"
    },
    {
      to: "/create",
      name: "Create"
    },
    // {
    //   to: "/edit",
    //   name: "Edit"
    // },
    {
      to: "/help",
      name: "Help"
    }
  ];

  return (
    <div>
      <h1>Expensify</h1>
      {subpages.map(({ to, name }, i) => (
        <span key={i}>
          <Link to={to}>{name}</Link>{" "}
        </span>
      ))}
    </div>
  );
};

export default Header;
