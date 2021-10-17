import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import React from "react";

const Cards = ({ data }) => {
  return (
    <Card
      elevation={4}
      raised={true}
      sx={{
        margin: { xs: "0.5rem 0.2rem", md: "2rem 1rem" },
        borderRadius: "14px",
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ margin: "0 0.5rem" }}>{data.LinksIcon}</Box>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography variant={"h6"} fontWeight="bold">
            {data.LinksName}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const LinksCard = React.memo(Cards);
export default LinksCard;
