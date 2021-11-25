import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
const GetItems = () => {
  const { folderName } = useParams();
  if (folderName) {
    const f = localStorage.getItem(folderName);
    const pf = JSON.parse(f);
    console.log(pf);
    const sender = [];
    if (pf != null) {
      for (let i = 0; i < pf.length; i++) {
        if (pf[i].length < 15) {
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
    const folders = localStorage.getItem("folders");
    // console.log(folders);
    if (folders) {
      return JSON.parse(localStorage.getItem("folders"));
    } else {
      return [];
    }
  }
};
const Folder1 = ({ folder }) => {
  const folderList = GetItems();
  // console.log(folderList);
  return (
    <div className="btn" style={{ width: "100%", margin: "auto" }}>
      {folderList.map((f, i) => {
        return (
          <Button
            variant="Link"
            href={`/${f}`}
            key={i}
            style={{
              float: "left",
              border: "1px solid gray",
              borderRadius: "10px",
              overflow: "hidden",
              width: "15%",
              margin: "10px",
              display: "flex",
              minWidth: "75px",
            }}
          >
            <img
              style={{ height: "30px", margin: "10px" }}
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/open-folder-3789308-3166319.png"
              alt="No img"
            />
            <Button
              variant="Link"
              href={`/${f}`}
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                paddingLeft: "20px",
                width: "100%",

                fontSize: "20px",
              }}
            >
              {f}
            </Button>
          </Button>
        );
      })}
    </div>
  );
};

export default Folder1;
