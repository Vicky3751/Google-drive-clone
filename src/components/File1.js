import React from "react";
import { useParams } from "react-router";

import { Modal, Button } from "react-bootstrap";
const GetItems = () => {
  const { folderName } = useParams();
  if (folderName) {
    const f = localStorage.getItem(folderName);
    const pf = JSON.parse(f);
    console.log(pf);
    const sender = [];

    if (pf != null) {
      for (let i = 0; i < pf.length; i++) {
        console.log(pf[i].substring(0, 10));
        if (pf[i].length > 15 && pf[i].substring(0, 10) === "data:image") {
          sender.push(pf[i]);
        }
      }
    }
    console.log(sender);
    if (sender.length > 0) {
      return sender;
    }
    return [];
  } else {
    const folders = localStorage.getItem("files");
    // console.log(folders);
    if (folders) {
      return JSON.parse(localStorage.getItem("files"));
    } else {
      return [];
    }
  }
};
const File1 = () => {
  const [open, setOpen] = React.useState(false);
  const [oneimage, setOneImage] = React.useState("false");
  function openModal(img) {
    // alert("Open modal");
    // console.log(img);
    // const image = JSON.stringify(img);
    // console.log(image);
    // const res = image.substring(8, 18);
    // console.log(res);
    // if()
    setOneImage(img);
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  const folderList = GetItems();
  // console.log(folderList);
  return (
    <div>
      <div>
        {folderList.map((img, i) => {
          return (
            <div
              key={i}
              style={{
                float: "left",
                width: "20%",
                border: "1px solid grey",
                borderRadius: "10px",
                margin: "25px",
                minWidth: "234px",
              }}
            >
              <img
                src={img}
                style={{
                  width: "90%",
                  height: "140px",
                  margin: "10px",
                  fontSize: "90px",
                  textAlign: "center",
                }}
                alt="{PDF}"
              />
              <div
                style={{
                  display: "flex",
                }}
              >
                <img
                  style={{ height: "30px", padding: "0 25px" }}
                  src="https://rb.gy/g6zq3b"
                  alt="No img"
                />

                <Button
                  variant="Link"
                  style={{
                    textAlign: "center",
                    marginTop: "0",
                    margin: "5px 30%",
                    padding: "3px 15px ",
                    border: "1px solid grey",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => openModal({ img })}
                >
                  Open
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal show={open} onHide={closeModal}>
        <Modal.Body>
          <img
            src={oneimage.img}
            alt=""
            style={{ width: "100%", height: "500px" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default File1;
