"use client";

import { useState, useEffect } from "react";

export default function ToggleBodyClass() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("dark_bg");
    } else {
      document.body.classList.remove("dark_bg");
    }
  }, [isActive]);

  return (

    <div className="demo-switch" onClick={() => setIsActive(!isActive)}>
      <div className="demo-dark-bg demo_switch"><button><i className="fas fa-moon"></i></button></div>
      <div className="demo-light-bg demo_switch"><button><i className="fas fa-sun"></i></button></div>
    </div>

  )
}