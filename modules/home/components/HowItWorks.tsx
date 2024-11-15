import { Box, Typography } from "@mui/material";
import WorkItem from "./WorkItem";

const HowItWorks = () => {
  return (
    <Box
      paddingTop={8}
      paddingBottom={7.5}
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
    >
      <Typography fontSize={45} fontWeight="bold">
        How it works
      </Typography>
      <Box
        width={"100%"}
        paddingX={28}
        display={"flex"}
        gap={16}
        justifyContent={"center"}
        marginTop={2}
      >
        <WorkItem
          arrow
          title="Medical screening"
          url="/images/medical-scan.png"
        >
          Fill out our digital health
          <br />
          questionnaire to begin your journey
        </WorkItem>
        <WorkItem
          arrow
          title="Video call with a physio"
          url="/images/camera.png"
        >
          Connect with a physiotherapist in
          <br />
          under a week without leaving home
        </WorkItem>
        <WorkItem title="Personalized treatment" url="/images/injured.png">
          Optimize recovery with targeted
          <br />
          rehab for all ages
        </WorkItem>
      </Box>
    </Box>
  );
};

export default HowItWorks;
