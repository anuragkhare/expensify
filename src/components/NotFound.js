import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    404!
    <p>
      <Link to="/">Home</Link>
    </p>
  </div>
);

export default NotFound;
