import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        margin: { xs: "2rem 0", md: "4rem 0" },
      }}
    >
      <Paper
        sx={{
          padding: { xs: "0.5rem", md: "1rem" },
          display: "flex",
          width: { xs: "100%", md: "70%" },
          borderRadius: "12px",
          margin: "1rem",
        }}
        elevation={4}
      >
        <Stack
          direction={{ xs: "column", md: "row-reverse" }}
          gap={5}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ borderRadius: "50%" }} className="profile_rounded">
            <Image
              src="/images/Profile.jpeg"
              width={200}
              height={200}
              alt="Profile Picture"
              className="profile_rounded"
            />
          </Box>
          <Typography
            variant="h6"
            sx={{ alignSelf: "center", justifySelf: "center" }}
          >
            Hey there 👋, I am <strong>Ashish Maurya</strong>. A freelance web
            developer and a Blockchain enthusiast. Connect me using below links.
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default AboutMe;
