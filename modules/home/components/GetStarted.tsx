import ContainedButton from "@/components/ui/ContainedButton";
import { Box, Typography } from "@mui/material";

const GetStarted = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9F5F5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 9.6,
      }}
    >
      <Typography fontSize={44} fontWeight="700">
        Start improving your health from home
        <span style={{ color: "#A51008" }}> now</span>
      </Typography>
      <Typography
        fontSize={28}
        color={"#1E1E1E"}
        sx={{ opacity: 0.7, marginBottom: 4, marginTop: 2 }}
      >
        Enjoy exclusive discounts and benefits as one of our first users!
      </Typography>
      <ContainedButton sx={{ height: 50, width: 150, fontSize: 17 }}>
        Get Started{" "}
      </ContainedButton>
    </Box>
  );
};

export default GetStarted;
