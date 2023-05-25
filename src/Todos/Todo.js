import { Button } from "@mui/material";
import React from "react";

const Todo = ({ title, completed, id, markCompleted }) => {
  const complete = (e) => {
    let todoId = e.target.value;
    markCompleted(todoId);
    console.log(todoId);
  };

  return (
    title !== "Default Todo" && (
      <div
        style={{
          margin: "5px 0px 5px 0px",
          padding: "15px",
          borderBottom: " 1px solid rgba(128, 128, 128, 0.34)",
          borderTop: " 1px solid rgba(128, 128, 128, 0.34)",
        }}
      >
        <h6>Title: {title}</h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6>Completed: {String(completed)}</h6>
          {!completed && (
            <Button
              variant="outlined"
              size="small"
              color="success"
              value={id}
              onClick={complete}
            >
              Mark Completed
            </Button>
          )}
        </div>
      </div>
    )
  );
};

export default Todo;
