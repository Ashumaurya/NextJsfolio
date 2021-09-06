import {
  Box,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  Button,
  Drawer,
  ListItemText,
  Divider,
} from "@mui/material";
import { useContext, useState } from "react";
import { DarkMode } from "../../../pages/api/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const MobNav = () => {
  const [isDarkMode, setIsDarkMode] = useContext(DarkMode);

  const [state, setState] = useState({
    top: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
          justifyContent: "center",
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {["HOME", "ABOUT", "WORK", "BLOG", "CONTACT"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText style={{ textAlign: "center" }}>
                {text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
      <List>
        <ListItem button style={{ justifyContent: "center" }}>
          {/* <IconButton
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
            color="inherit"
          >
            {isDarkMode === false ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton> */}
        </ListItem>
        <ListItem style={{ justifyContent: "center" }}>
          <IconButton color="inherit">
            <GitHubIcon />
          </IconButton>

          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
        </ListItem>
      </List>
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          A.M
        </Typography>

        <IconButton
          sx={{ ml: 1 }}
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
          color="inherit"
        >
          {isDarkMode === false ? (
            <WbSunnyIcon fontSize="small" />
          ) : (
            <NightsStayIcon fontSize="small" />
          )}
        </IconButton>

        <IconButton color="inherit" onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          sx={{ width: "100vw", height: "100vh" }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </Toolbar>
    </Box>
  );
};

export default MobNav;
