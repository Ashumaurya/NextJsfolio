import { Box, Card, Stack } from "@mui/material";
import {
  MemoClubHouseIcon,
  MemoInstagramIcon,
  MemoLinkedIn,
  MemoMailIcon,
  MemoTwitterIcon,
} from "./icons";

const Socials = () => {
  const socialIcon = [
    //Twitter
    {
      icon: <MemoTwitterIcon />,
      href: "https://twitter.com/theysaymaurya",
    },
    //LinkedIn
    {
      icon: <MemoLinkedIn />,
      href: "https://www.linkedin.com/in/theashishmaurya/",
    },
    //Instagram
    {
      icon: <MemoInstagramIcon />,
      href: "https://www.instagram.com/theashishmaurya/",
    },
    //ClubHouse
    {
      icon: <MemoClubHouseIcon />,
      href: "https://www.clubhouse.com/@theashishmaurya",
    },
    //Mail

    {
      icon: <MemoMailIcon />,
      href: "mailto:ashish.1999vns@gmail.com",
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem 0",
      }}
    >
      <Stack gap={2} direction="row">
        {socialIcon.map((data, index) => {
          return (
            <a href={data.href} key={index}>
              {data.icon}
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Socials;
