import { Typography } from "@mui/material";
import React from "react";

const Post = ({ title, body }) => {
  return (
    <div
      style={{
        margin: "5px 0px 5px 0px",
        padding: "15px",
        border: "1px solid rgba(128, 128, 128, 0.34)",
        borderRadius: "10px",
      }}
    >
      <Typography variant="subtitle1">Title: {title}</Typography>
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
