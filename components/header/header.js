import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item lg={2} md={1} xs={0}></Grid>
        <Grid item md={5} lg={4} xs={12}>
          <Box sx={{ flexGrow: 1, fontWeight: "500" }}>
            <Typography variant="h2">
              Creative developer and content Creator
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
