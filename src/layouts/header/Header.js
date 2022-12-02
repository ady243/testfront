import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import AdbIcon from "@mui/icons-material/Adb";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ background: "#872B54" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HOME
          </Typography>

          <Link to={`/products/new`} variant="contained">
            <Button sx={{ marginLeft: "1165px" }} variant="contained">
              ADD PRODUCT
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
