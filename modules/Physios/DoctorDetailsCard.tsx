"use client";

import { Avatar, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import DoctorDetail from "models/doctor-detail.model";
import ContainedButton from "@/components/ui/ContainedButton";
import { truncateText } from "utils/strings";
import { useRouter } from "next/navigation";

const StyledBox = styled(Box)({
  width: "90%",
  height: 320,
  padding: 8,
  backgroundColor: "#ffffff",
  borderRadius: 5,
  paddingTop: 32,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
});

const StyledTypography = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

type DoctorDetailCardProp = {
  doctorDetail: DoctorDetail;
};

export const DoctorDetailCard = ({ doctorDetail }: DoctorDetailCardProp) => {
  const router = useRouter();
  const { id, specialty, user } = doctorDetail;

  const handleOnclick = () => router.push(`/physios/doctor/${id}`);

  return (
    <StyledBox>
      <Avatar
        src={user.profilePictureUrl}
        sx={{
          width: 120,
          height: 120,
          fontSize: 48,
          fontWeight: "600",
          marginBottom: 1.5,
        }}
      >
        {user.name[0]}
      </Avatar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingX={1}
      >
        <Typography fontWeight="700">{`Dr. ${truncateText(
          user.name,
          30
        )}`}</Typography>
        <StyledTypography color="#A51008" fontSize={14}>
          {truncateText(specialty, 30)}
        </StyledTypography>
        <Divider
          sx={{ color: "#00000033", marginY: 2, borderBottomWidth: "1px" }}
          flexItem
        />
        <ContainedButton onClick={handleOnclick}>Book Now</ContainedButton>
      </Box>
    </StyledBox>
  );
};
