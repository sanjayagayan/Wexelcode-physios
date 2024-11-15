
import { Box, styled, Typography } from "@mui/material";
import RowWithCircle from "./RowWithCircle";

const ImageBox = styled(Box)({
  width: "40%",
  height: "700px",
  backgroundImage: "url(/images/banner4.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

const SneakPeek = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ImageBox />
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          paddingTop: 8,
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <Typography fontSize={50} fontWeight="bold" align="center">
          Here’s a sneak peek of what’s being developed
        </Typography>
        <Box display={"flex"} justifyContent="space-between" gap={16}>
          <div>
            <RowWithCircle text="Only pay if our service is right for you" />
            <RowWithCircle text="Wearable integrations" />
            <RowWithCircle text="AI automation" />
            <RowWithCircle text="Pain level monitoring" />
          </div>
          <div>
            <RowWithCircle text="Personalized plan" />
            <RowWithCircle text="Smart exercise recommendations" />
            <RowWithCircle text="Progress tracking & analysis" />
            <RowWithCircle text="Real-time monitoring" />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default SneakPeek;
