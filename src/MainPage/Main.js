import React from "react";

import Folders from "../components/Folders";
import Folder from "../components/Folder1";
import Files from "../components/Files";
import File from "../components/File1";
const Main = () => {
  return (
    <div style={{ padding: "10px 50px", width: "100%" }}>
      <Folders />
      {/* To display al the folders list */}
      <Folder />
      <hr />
      <Files />
      <File />
    </div>
  );
};

export default Main;
