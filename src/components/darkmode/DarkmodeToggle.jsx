import React, { useEffect, useState } from "react";

const DarkmodeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem("darkModeEnabled");
    setIsDarkMode(darkModeEnabled === "true");
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkModeEnabled", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkModeEnabled", "false");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </>
  );
};

export default DarkmodeToggle;
