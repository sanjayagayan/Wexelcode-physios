"use client";

import SuccessSvg from "@/components/icons/SuccessSvg";
import ContainedButton from "@/components/ui/ContainedButton";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  appointmentId: string;
};
const PaymentSuccessPageView = ({ appointmentId }: Props) => {
  const router = useRouter();

  const handleOnClick = () => router.push("/dashboard");
  //
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bgcolor="#ffffff"
      height="80vh"
      mt={6}
      mx={2}
      borderRadius={2}
    >
      <SuccessSvg />
      <Typography fontWeight={700} fontSize={32}>
        Your Booking has Confirmed!
      </Typography>
      <Typography fontWeight={400} fontSize={14}>
        Welcome aboard! Start your success journey with Wexelcode !
      </Typography>
      <Typography fontWeight={500} fontSize={16} mt={1} mb={4}>
        Appointment ID :{" "}
        <Link href={`/appointments/${appointmentId}`} style={{ color: "blue" }}>
          {appointmentId}
        </Link>
      </Typography>
      <ContainedButton
        onClick={handleOnClick}
        style={{ backgroundColor: "#000000" }}
      >
        Back to Dashboard
      </ContainedButton>
    </Box>
  );
};

export default PaymentSuccessPageView;
