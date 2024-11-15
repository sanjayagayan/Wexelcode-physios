import CircleSvg from "@/components/icons/CircleSvg";
import { Box, Typography } from "@mui/material";

type Props = {
  text: string;
};

const RowWithCircle = ({ text }: Props) => {
  return (
    <Box
      display={"flex"}
      gap={1}
      marginTop={5}
      alignItems={"center"}
    >
      <CircleSvg />
      <Typography fontWeight={"bold"}>{text}</Typography>
    </Box>
  );
};

export default RowWithCircle;
