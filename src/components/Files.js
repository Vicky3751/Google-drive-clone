import React, { useState, useCallback } from "react";
import { useParams } from "react-router";

import { useDropzone } from "react-dropzone";

const Files = () => {
  let { folderName } = useParams();
  let initFolder;
  if (localStorage.getItem("files") === null) {
    initFolder = [];
  } else if (folderName && localStorage.getItem(folderName) === null) {
    initFolder = [];
  } else if (folderName) {
    initFolder = JSON.parse(localStorage.getItem(folderName));
  } else {
    initFolder = JSON.parse(localStorage.getItem("files"));
  }
  // console.log(initFolder);
  const [images, setImages] = useState(initFolder);
  function handleUpload(e) {
    let uploadedImage = "";
    console.log(e.target.files[0]);
    var reader = new FileReader();

    console.log(e.target.result);
    reader.addEventListener("load", function (e) {
      uploadedImage = reader.result;
      setImages([...images, uploadedImage]);
      window.location.reload(false);
    });

    reader.readAsDataURL(e.target.files[0]);
  }
  React.useEffect(() => {
    if (folderName) {
      // console.log(folderName);

      localStorage.setItem(folderName, JSON.stringify(images));
    } else {
      // console.log(images);
      localStorage.setItem("files", JSON.stringify(images));
    }
  }, [images]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      console.log(acceptedFiles[0].name);
      var reader = new FileReader();
      let uploadedImage = "";
      const checkPDF = acceptedFiles[0].name.substring(
        acceptedFiles[0].name.length - 4,
        acceptedFiles[0].name.length
      );
      console.log(checkPDF);
      if (checkPDF !== ".pdf") {
        reader.addEventListener("load", function (e) {
          uploadedImage = reader.result;
          setImages([...images, uploadedImage]);
          window.location.reload(false);
        });
        // console.log(acceptedFiles[0]);
        reader.readAsDataURL(acceptedFiles[0]);
      }
    },
    [images]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div style={{ margin: "20px auto", display: "flex" }}>
        <span style={{ fontSize: "20px", width: "90%" }}>Files</span>
        <label
          className="btn btn-primary"
          style={{ width: "10%", height: "40px" }}
        >
          Create File
          <input type="file" style={{ opacity: "0" }} onChange={handleUpload} />
        </label>
      </div>

      <div
        style={{
          border: "5px dotted grey",
          height: "200px",
          fontSize: "40px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          minWidth: "390px",
          width: "90%",
          margin: "50px auto",
          cursor: "pointer",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p style={{ color: "grey" }}>
            Drag 'n' drop an Image here, or click to select Image
          </p>
        )}
      </div>
    </>
  );
};

export default Files;
