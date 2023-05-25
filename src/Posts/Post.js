import { Typography } from "@mui/material";
import React from "react";

const Post = ({ title, body }) => {
  return (
    <div
      style={{
        margin: "5px 0px 5px 0px",
        padding: "1rem 1rem 3rem 1rem",
        border: "1px solid rgba(128, 128, 128, 0.34)",
        borderRadius: "10px",
        boxShadow:
          " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <Typography variant="subtitle1">Title: {title}</Typography>
      <hr style={{ borderColor: "#cecece26" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="caption">Body: {body}</Typography>
      </div>
    </div>
  );
};

export default Post;
