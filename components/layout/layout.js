import { Box } from "@mui/material";
import DeskNav from "./Navbar/desktopNav.js";
import MobNav from "./Navbar/mobileNav.js";

const Layout = ({ children }) => {
  return (
    <>
      <DeskNav />
      {/* <MobNav /> */}
      {children}
    </>
  );
};

export default Layout;
