import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CoverLight from "../../public/images/CoverPhotoLight.png";
import CoverDark from "../../public/images/CoverPhotoDarkBright.png";
import styles from "../header/header.module.css";
import Image from "next/image";
import { useContext } from "react";
import { DarkMode } from "../../pages/api/theme";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import React from "react";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const Circle = styled(Paper)(({ theme }) => ({
  height: "4rem",
  width: "4rem",
  background:
    theme.palette.mode === "light" ? "#E5E4E4" : "rgba(255, 255, 255, 0.12)",
  borderRadius: "50%",
  "&:hover": {
    height: "5rem",
    width: "5rem",
  },
}));

const Scroll = styled(Box)(({ theme }) => ({
  transform: "scale(-1, 1)",
  transform: "rotate(90deg)",
  position: "fixed",
  right: "0",
  bottom: "10rem",
  display: "flex",
  alignContent: "center",
  textAlign: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Shadow = styled(Paper)(({ theme }) => ({
  height: "4rem",
  width: "70%",
  background:
    theme.palette.mode === "light" ? "#E5E4E4" : "rgba(255, 255, 255, 0.12)",
  borderRadius: "50%",
}));

const Header = () => {
  const [isDarkMode, setIsDark] = useContext(DarkMode);
  return (
    <Box sx={{ flexGrow: 1, padding: "2rem" }}>
      <Grid container spacing={3}>
        {/* <Grid item lg={1} xs={0}></Grid> */}
        <Grid item md={10} lg={6} xs={12}>
          <Box
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              alignItems: "center",
              margin: "4rem 0",
            }}
          >
            <Typography variant="h2">
              creative developer and content creator
            </Typography>
            <Box sx={{ margin: "1rem 0" }}>
              <Typography variant="body2" fontSize="large">
                Hi I'm Ashish Maurya. A passionate Developer and a Programmer
                based in the India.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                margin: "6rem 0rem",
              }}
            >
              <Circle elevation={0} style={{ position: "absolute" }} />
              <Typography
                fontWeight="bold"
                fontSize="large"
                style={{
                  position: "relative",
                  left: "2rem",
                  alignItems: "center",
                  display: "flex",
                  cursor: "pointer",
                }}
              >
                SEE MY WORKS <ArrowRightAltIcon fontSize="medium" />
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "4rem 0",
                padding: "4rem 0",
              }}
            >
              <Box
                sx={{
                  margin: "0 0.3rem 0 0",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Typography fontSize="medium">Github </Typography>
              </Box>
              <Box sx={{ margin: "0 0.3rem" }}>
                <Typography fontSize="medium">/</Typography>
              </Box>
              <Box
                sx={{
                  margin: "0 0.3rem 0 0",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Typography fontSize="medium"> Sandbox </Typography>{" "}
              </Box>
              <Box sx={{ margin: "0 0.3rem" }}>
                <Typography fontSize="medium">/</Typography>
              </Box>
              <Box
                sx={{
                  margin: "0 0.3rem 0 0",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Typography fontSize="medium"> Dribble </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "2rem 0rem",
              transformOrigin: "bottom",
            }}
          >
            {isDarkMode ? (
              <Image
                src={CoverDark}
                height={500}
                width={500}
                className={styles.bounce}
              />
            ) : (
              <Image
                src={CoverLight}
                height={500}
                width={500}
                className="bounce"
              />
            )}
            <Shadow elevation={0} />
          </Box>
        </Grid>
      </Grid>
      <Scroll>
        <Typography fontSize="small" sx={{ margin: "0rem 0.2rem", padding: 0 }}>
          {" "}
          SCROLL DOWN{" "}
        </Typography>
        <DoubleArrowIcon fontSize="small" />
      </Scroll>
    </Box>
  );
};
export default Header;
