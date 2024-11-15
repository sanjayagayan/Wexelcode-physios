import ArrowSVG from "@/components/icons/ArrowSvg";
import { Box, Typography, styled } from "@mui/material";
import { ReactNode } from "react";

const IconBox = styled(Box)(({ url }: { url: string }) => ({
  width: 100,
  height: 100,
  backgroundImage: `url(${url})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

type Props = {
  title: string;
  url: string;
  children: ReactNode;
  arrow?: boolean;
};

const WorkItem = ({ title, url, children, arrow }: Props) => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      position={"relative"}
    >
      <IconBox url={url} />
      <Typography fontSize={20} fontWeight={700}>
        {title}
      </Typography>
      <Typography fontSize={15} align="center">
        {children}
      </Typography>
      <Box position={"absolute"} bottom={120} left={180}>
        {arrow && <ArrowSVG />}
      </Box>
    </Box>
  );
};

export default WorkItem;
