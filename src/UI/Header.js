import React from "react";
import "./Header.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_title">
          <CoffeeIcon className="listIcon" />
          <Typography variant="h4" component="h1" style={{ fontWeight: "700" }}>
            TO-DO MANAGEMENT APP
          </Typography>
        </div>
        <div className="container">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
