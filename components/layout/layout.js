import { FlashOnRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import DeskNav from "./Navbar/desktopNav.js";
import MobNav from "./Navbar/mobileNav.js";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width:768px)").matches);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width:768px)").matches);
    });
  });

  return (
    <>
      {isMobile ? <MobNav /> : <DeskNav />}
      {children}
    </>
  );
};

export default Layout;
