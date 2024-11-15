import ContainedButton from "@/components/ui/ContainedButton";
import { Box, styled, Typography } from "@mui/material";

const SecondBox = styled(Box)({
  width: "50%",
  height: "600px",
  backgroundImage: "url(/images/main-banner.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "50%",
          backgroundColor: "#F9F5F5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography fontSize={50} fontWeight="bold" sx={{ lineHeight: 1.3 }}>
            Experience Optimal
            <br /> Health with{" "}
            <span style={{ color: "#A51008" }}>WexelCode</span>
          </Typography>
          <Typography marginTop={1.6} marginBottom={1.5} fontSize={21}>
            Your smart partner for personalized physiotherapy.
          </Typography>
          <ContainedButton sx={{ height: 50 }}>Get Started Now</ContainedButton>
        </Box>
      </Box>

      <SecondBox />
    </Box>
  );
};

export default Banner;
