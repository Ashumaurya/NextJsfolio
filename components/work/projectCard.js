import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Line = styled(Box)(({ theme }) => ({
  height: "0.3rem",
  width: "8%",
  alignItems: "center",
  background:
    theme.palette.mode === "light" ? "#E5E4E4" : "rgba(255, 255, 255, 0.12)",
}));

const Project = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        <Line />{" "}
        <Typography
          sx={{ alignItems: "center", margin: "0 1rem" }}
          fontSize="large"
          variant="h5"
        >
          01
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <Typography variant="h2">Mapify</Typography>
          <Typography variant="body2">Ui/UX</Typography>
        </Box>
        <Box sx={{}}>View Project</Box>
      </Box>
    </>
  );
};

export default Project;
