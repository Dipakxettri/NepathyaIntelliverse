import React, { useState, useEffect } from "react";
import Popup from "./components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000); // Show after 3s
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowPopup(false);

  return (
    <div>
      <h1>My Website Content</h1>
      <p>Other content on your page...</p>

      <Popup show={showPopup} onClose={handleClose} />
    </div>
  );
}

export default App;
