"use client";

import { Box, Typography } from "@mui/material";
import DoctorDetail from "models/doctor-detail.model";
import Image from "next/image";
import { truncateText } from "utils/strings";
import { AppointmentSchedule } from "./AppointmentSchedule";
import { useState } from "react";
import Payment from "./payment/Payment";
import { useRouter } from "next/navigation";
import BackButton from "@/components/ui/BackButton";

type Props = {
  doctorDetail: DoctorDetail;
};

const DoctorViewPage = ({ doctorDetail }: Props) => {
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const [appointmentId, setAppointmentId] = useState<string>();
  const router = useRouter();
  const { specialty, description, hourlyRate } = doctorDetail;

  const { profilePictureUrl, name } = doctorDetail.user;

  const formattedCurrencyAmount =
    new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(hourlyRate) + "$";

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Box  paddingTop={1.8}>
      {!appointmentId && <BackButton onClick={handleBackClick} />}
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        height="75vh"
        bgcolor="#ffffff"
        borderRadius={2}
        marginTop={4}
        padding={3}
      >
        <>
          {appointmentId ? (
            <Payment
              appointmentId={appointmentId}
              doctorName={name}
              doctorSpecialty={specialty}
              appointmentDate={date!}
              appointmentTime={time!}
              totalAmount={hourlyRate}
            />
          ) : (
            <>
              <Box
                width="50%"
                borderRight="2px dashed"
                boxSizing="border-box"
                paddingRight={20}
              >
                <Image
                  alt=""
                  src={profilePictureUrl ?? "/images/doctor.jpeg"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "44%", borderRadius: 6 }}
                />
                <Typography
                  fontWeight="700"
                  fontSize="22px"
                  marginTop={2}
                >{`Dr. ${truncateText(name, 50)}`}</Typography>
                <Typography color="#A51008" fontWeight="500" fontSize="17">
                  {specialty}
                </Typography>
                <Typography fontSize="14" marginTop={1.5}>
                  {description}
                </Typography>
                <Box display="flex" flexDirection="row" alignItems="end">
                  <Typography fontWeight="700" fontSize="32px" marginTop={1.5}>
                    {Number.isInteger(hourlyRate)
                      ? `${hourlyRate}$`
                      : formattedCurrencyAmount}
                  </Typography>
                  <Typography fontSize="28" marginBottom={0.5} marginLeft={0.4}>
                    /h
                  </Typography>
                </Box>
              </Box>
              <AppointmentSchedule
                doctorDetailId={doctorDetail.id}
                date={date}
                time={time}
                setDate={setDate}
                setTime={setTime}
                setAppointmentId={setAppointmentId}
              />
            </>
          )}
        </>
      </Box>
    </Box>
  );
};
export default DoctorViewPage;
