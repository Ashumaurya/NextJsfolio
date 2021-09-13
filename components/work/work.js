import { Box, Typography } from "@mui/material";
import Project from "./projectCard";
import { styled } from "@mui/material/styles";

const Title = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  margin: "4rem 10rem",
  [theme.breakpoints.down("xl")]: {
    margin: "1rem 4rem",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "1rem 2rem",
  },
}));
const Work = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Title>
        <Typography variant="h3" fontWeight="Bold">
          Crafted with love.
        </Typography>
      </Title>

      <Project />
    </Box>
  );
};

export default Work;
