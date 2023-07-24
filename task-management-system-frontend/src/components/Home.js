import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home
      <Link to="/sign-in">
        <button>Sign In</button>
      </Link>
    </div>
  );
}
