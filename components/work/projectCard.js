import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Line = styled(Box)(({ theme }) => ({
  height: "0.4rem",
  width: "100%",
  background:
    theme.palette.mode === "light" ? "#E5E4E4" : "rgba(255, 255, 255, 0.12)",
}));

const Hover = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "light" ? "#f9f9f9" : "rgba(255, 255, 255, 0.12)",
  padding: "4rem 0rem",
  "&:hover": {
    [theme.breakpoints.up("sm")]: {
      transformOrigin: "left top  ",
      transform: "scale(1.1,1.1)",
      overflowY: "hidden",
    },
  },
}));

const Project = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
        <Hover>
          {/* <Line />{" "}
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
        <Box
          sx={{
            margin: "0 8rem",
          }}
        >
          <Typography variant="h5" fontWeight="500">
            View Project
          </Typography>
        </Box> */}

          <Grid container spacing={2}>
            <Grid item md={2} alignItems="center" sx={{ alignItems: "center" }}>
              <Box
                height="100%"
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Line />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{ margin: "0 1rem" }}
                    fontSize="large"
                    variant="h5"
                  >
                    01
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h3">mapify</Typography>
                  <Typography variant="body2" sx={{ padding: "0 1rem" }}>
                    {" "}
                    Ui/UX
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              Project
            </Grid>
          </Grid>
        </Hover>
      </Box>
    </>
  );
};

export default Project;
