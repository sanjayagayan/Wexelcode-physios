import HeartSVG from "@/components/icons/HeartSvg";
import ThumbUpSVG from "@/components/icons/ThumbUpSvg";
import { Box, styled, Typography } from "@mui/material";

const ImageBox = styled(Box)({
  width: "40%",
  height: "700px",
  backgroundImage: "url(/images/banner2.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

const WeMakeDifferent = () => {
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
          paddingTop:12,
          paddingLeft:16
        }}
      >
        <Typography fontSize={50} fontWeight="bold" sx={{ lineHeight: 1.3 }}>
          We make a difference
        </Typography>
        <Typography marginTop={1.4} marginBottom={1.5} fontSize={21}>
          Experience personalized physiotherapy with better
          <br />
          accessibility and convenience
        </Typography>

        <Box display={"flex"} gap={4} marginBottom={7} marginTop={8} alignItems={"center"}>
          <HeartSVG />
          <div className="div">
            <Typography fontWeight={700}>Fair and Simple</Typography>
            <Typography>Only pay if our service is right for you</Typography>
          </div>
        </Box>
        <Box display={"flex"} gap={4} alignItems={"center"}>
          <ThumbUpSVG />
          <div className="div">
            <Typography fontWeight={700}>Quality care</Typography>
            <Typography>Certified physiotherapy treatment quickly and from home</Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default WeMakeDifferent;
