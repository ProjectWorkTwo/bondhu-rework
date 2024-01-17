import React from "react";
import { primaryColor } from "../../Constant/Constant";

const CustomScrollBar = () => {
  return (
    <style>
      {`        
        * {
          scrollbar-width: thin;
          scrollbar-color: ${primaryColor} #ddd;
        }
        *::-webkit-scrollbar {
          width: 10px;
        }
        *::-webkit-scrollbar-thumb {
          background-color: ${primaryColor};
          border-radius: 50px;
        }
        *::-webkit-scrollbar-track {
          background-color: #ddd;
        }
        html {
          overflow-y: scroll;
        }
        body {
          margin-right: 20px;
        }
        body::-moz-scrollbar {
          width: 10px;
        }
        body::-moz-scrollbar-thumb {
          background-color: ${primaryColor};
          border-radius: 50px;
        }
        body::-moz-scrollbar-track {
          background-color: #ddd;
        }
      `}
    </style>
  );
};

export default CustomScrollBar;
