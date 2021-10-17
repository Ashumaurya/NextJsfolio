import { Box, Typography } from "@mui/material";
import ThemeSwitch from "./themeSwitch";

const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography fontWeight="bold" variant="h4">
          A.M
        </Typography>
      </Box>
      <Box>
        <ThemeSwitch />
      </Box>
    </Box>
  );
};

export default Navbar;
