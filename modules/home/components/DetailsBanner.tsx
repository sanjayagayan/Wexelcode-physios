import AimSvg from "@/components/icons/AimSvg";
import PhysiosSvg from "@/components/icons/PhysiosSvg";
import TubeSVG from "@/components/icons/TubeSvg";
import { Box, styled, Typography } from "@mui/material";

const ImageBox = styled(Box)({
  width: "40%",
  height: "700px",
  backgroundImage: "url(/images/banner3.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

const DetailsBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          paddingTop: 12,
          paddingLeft: 16,
        }}
      >
        <Box display={"flex"} gap={4} marginBottom={7} marginTop={8} alignItems={"center"}>
          <AimSvg />
          <div className="div">
            <Typography fontWeight={700}>Personalized treatment</Typography>
            <Typography>
              Where advanced technology meets human compassion
            </Typography>
          </div>
        </Box>
        <Box display={"flex"} gap={3} marginBottom={7} alignItems={"center"}>
          <TubeSVG />
          <div className="div">
            <Typography fontWeight={700}>Rigorous Science</Typography>
            <Typography>
              Adheres to the gold standard of medical screening
            </Typography>
          </div>
        </Box>
        <Box display={"flex"} gap={4} alignItems={"center"}>
          <PhysiosSvg />
          <div className="div">
            <Typography fontWeight={700}>Made by Physios</Typography>
            <Typography>
              Built by physiotherapists for patients and fellow physios
            </Typography>
          </div>
        </Box>
      </Box>
      <ImageBox />
    </Box>
  );
};

export default DetailsBanner;
