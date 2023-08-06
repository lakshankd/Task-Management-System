import axios from "axios";
import React, { Component, useEffect, useState } from "react";

export default function AuthContent() {
  const [data, setData] = useState({});

  useEffect(() => {
    const request = axios.get("")
  }, []);

  return (
    <div>
      <p>Hello There!</p>
      {data}
    </div>
  );
}
