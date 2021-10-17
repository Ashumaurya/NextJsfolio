import { Box } from "@mui/material";
import SocialLinks from "./linksCard";
import {
  MemoBlogIcon,
  MemoDribbbleIcon,
  MemoGithubIcon,
  MemoPortfolioIcon,
} from "./icons";

const LinkContainer = () => {
  const Links = [
    {
      LinksName: "Developer's Portfolio",
      Linkshref: "https://theashishmaurya.me",
      LinksIcon: <MemoPortfolioIcon />,
    },
    {
      LinksName: "Personal Blog",
      Linkshref: "https://blog.theashishmaurya.me",
      LinksIcon: <MemoBlogIcon />,
    },
    {
      LinksName: "Github Profile",
      Linkshref: "https://github.com/theashishmaurya",
      LinksIcon: <MemoGithubIcon />,
    },
    {
      LinksName: "Design Porfolio",
      Linkshref: "https://dribbble.com/theashishmaurya",
      LinksIcon: <MemoDribbbleIcon />,
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "70%" } }}>
        {Links.map((data, index) => {
          return (
            <a href={data.Linkshref} key={index}>
              <SocialLinks data={data} />
            </a>
          );
        })}
      </Box>
    </Box>
  );
};

export default LinkContainer;
