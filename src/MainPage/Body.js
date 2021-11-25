import React from "react";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:folderName" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
