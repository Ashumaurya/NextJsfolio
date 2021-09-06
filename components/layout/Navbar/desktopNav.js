import {
  Box,
  IconButton,
  Paper,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
import { DarkMode } from "../../../pages/api/theme";
import Tab from "@mui/material/Tab";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: 5,
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 5,
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.mode === "light" ? "#000" : "#fff",
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "inherit",
    "&.Mui-selected": {
      color: theme.palette.mode === "light" ? "#000" : "#fff",
      fontWeight: theme.typography.fontWeightBold,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useContext(DarkMode);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          A.M
        </Typography>
        <Box sx={{ fontWeight: "bold", py: 2 }}>
          <StyledTabs value={value} onChange={handleChange} textColor="primary">
            <StyledTab label="HOME" />
            <StyledTab label="ABOUT" />
            <StyledTab label="WORK" />
            <StyledTab label="BLOG" />
            <StyledTab label="CONTACT" />
          </StyledTabs>
        </Box>

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
      </Toolbar>
    </Box>
  );
};

export default Navbar;
