import styled from "@emotion/styled";
import { BoltRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";

const StyledDiv = styled("div")({
  width: "100%",
  height: "100%",
  background: `url(/images/signup.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position:"relative"
});
const SignupBanner = () => {
  return (
    <StyledDiv>
      <div style={{ position: "absolute", bottom:100, left:100 }}>
        <Typography
          fontWeight={900}
          fontSize={50}
          color="#ffffff"
          letterSpacing={2}
          marginBottom={2}
        >
          Discover services <br />
          run your business.
        </Typography>
        <Typography fontWeight={400} fontSize={20} color="#ffffff">
          Wexelcode is the largest <br />
          MSK platform worldwide
        </Typography>
      </div>
    </StyledDiv>
  );
};

export default SignupBanner;
