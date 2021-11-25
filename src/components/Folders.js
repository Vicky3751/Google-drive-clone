import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useParams } from "react-router";

const Folders = () => {
  const { folderName } = useParams();
  let initFolder;
  if (localStorage.getItem("folders") === null) {
    initFolder = [];
  } else if (folderName && localStorage.getItem(folderName) === null) {
    initFolder = [];
  } else if (folderName) {
    initFolder = JSON.parse(localStorage.getItem(folderName));
  } else {
    initFolder = JSON.parse(localStorage.getItem("folders"));
  }
  // console.log(initFolder);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [names, setNames] = useState(initFolder);

  function openModal() {
    // alert("Open modal");
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName(name);

    setNames([...names, name]);
    closeModal();
    window.location.reload(false); //to refresh the page
  }
  React.useEffect(() => {
    if (folderName) {
      // console.log(folderName);

      localStorage.setItem(folderName, JSON.stringify(names));
    } else {
      localStorage.setItem("folders", JSON.stringify(names));
    }
  }, [names]);
  return (
    <>
      <div style={{ margin: "20px auto", display: "flex" }}>
        <span style={{ fontSize: "20px", width: "90%" }}>Folders</span>
        <button
          type="button"
          style={{ width: "10%" }}
          className="btn btn-primary"
          onClick={openModal}
        >
          Create Folder
        </button>
      </div>

      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label style={{ fontSize: "26px" }}>
                Folder Name
                <p style={{ fontSize: "12px" }}>*Less than 15 character</p>
              </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" type="submit" onSubmit={handleSubmit}>
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Folders;
