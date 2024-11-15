"use client";

import ContainedButton from "@/components/ui/ContainedButton";
import { Box, Typography } from "@mui/material";
import Appointment from "models/appointment.model";
import Image from "next/image";
import { truncateText } from "utils/strings";
import { formatISODateTime } from "utils/time";
import Note from "./Note";
import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/navigation";
import VideocamIcon from "@mui/icons-material/Videocam";

type Props = {
  appointment: Appointment;
};
const AppointmentPageView = ({ appointment }: Props) => {
  const router = useRouter();

  const { id, doctorDetail, note, appointmentTime } = appointment;

  const { formattedDate, formattedTime } = formatISODateTime(appointmentTime);

  const handleBackClick = () => {
    router.push("/appointments");
  };

  const handleJoin = () => {
    router.push(`/appointments/${appointment.id}/video-call`);
  };

  return (
    <Box paddingTop={0.5} paddingBottom={1.8} paddingLeft={2} paddingRight={4}>
      <BackButton onClick={handleBackClick} />
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        height="85vh"
        bgcolor="#ffffff"
        borderRadius={2}
        marginTop={2.5}
        padding={3}
      >
        <Box
          width="50%"
          borderRight="2px dashed"
          boxSizing="border-box"
          paddingRight={20}
        >
          <Image
            alt=""
            src={doctorDetail.user.profilePictureUrl}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "44%", borderRadius: 6 }}
          />
          <Typography
            fontWeight="700"
            fontSize="22px"
            marginTop={2}
          >{`Dr. ${truncateText(doctorDetail.user.name, 50)}`}</Typography>
          <Typography color="#A51008" fontWeight="500">
            {doctorDetail.specialty}
          </Typography>
          <Typography
            color="#1B1999"
            fontWeight="500"
            fontSize={18}
            marginTop={2}
          >
            {`Appointment ID: ${id}`}
          </Typography>
          <Typography fontWeight="500" fontSize={18}>
            {formattedDate}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formattedTime}
          </Typography>
          <ContainedButton
            disabled={appointment.sessionTime > 1800}
            startIcon={<VideocamIcon />}
            backgroundColor="#009BFF"
            onClick={handleJoin}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              marginTop: 2,
              paddingX: 2,
              paddingY: 1,
            }}
          >
            Join Now
          </ContainedButton>
        </Box>

        <Note note={note} />
      </Box>
    </Box>
  );
};
export default AppointmentPageView;
