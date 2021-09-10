import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { DarkMode } from "./api/theme";
import navbar from "../components/layout/Navbar/desktopNav.js";
import Navbar from "../components/layout/Navbar/desktopNav.js";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Nav() {
  const [isDarkMode, setIsDarkMode] = React.useContext(DarkMode);
  return (
    <Box sx={{ flexGrow: 1 }} mt={0}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Switch
            inputProps={{ "aria-label": "controlled" }}
            checked={isDarkMode}
            onChange={() => {
              setIsDarkMode(!isDarkMode);
            }}
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Navbar />
    </Box>
  );
}
