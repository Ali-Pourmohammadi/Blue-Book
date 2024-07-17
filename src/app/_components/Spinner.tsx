import React from 'react';
// import './globals.css'; // Ensure this import matches your setup

function Spinner() {
  return (
    <div className="flex items-center  relative min-h-screen">
      <div className="spinner absolute  top-1/2  left-2/4"></div>
    </div>
  );
}

export default Spinner;
