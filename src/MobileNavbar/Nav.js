import "./Nav.css";
import { Box, Card, Stack, Typography } from "@mui/material";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ callbackTodos }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="mobile_navbar"
      style={{ borderRadius: "2rem 2rem 0rem 0rem" }}
    >
      <Stack direction="row" spacing={1} style={{ gap: "1rem" }}>
        <Box onClick={() => navigate("/")}>
          <SupervisedUserCircleIcon style={{ fontSize: "2rem" }} />
          <Typography variant="caption" display="block">
            Users
          </Typography>
        </Box>
        <Box onClick={() => navigate("/todos")}>
          <AssignmentIcon style={{ fontSize: "2rem" }} />
          <Typography variant="caption" display="block">
            Todos
          </Typography>
        </Box>
        <Box onClick={() => navigate("/posts")}>
          <LocalPostOfficeIcon style={{ fontSize: "2rem" }} />
          <Typography variant="caption" display="block">
            Posts
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default Nav;
