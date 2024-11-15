"use client";

import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ContainedButton from "@/components/ui/ContainedButton";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useRef } from "react";
import { TimePickerModal, TimePickerModalHandler } from "./TimePickerModal";
import { useCreateAppointmentMutation } from "services/appointment-api";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const CustomDateCalendar = styled(DateCalendar)(({ theme }) => ({
  "& .MuiPickersCalendarHeader-switchViewButton": {
    color: "#A51008",
  },

  "& .MuiPickersCalendarHeader-iconButton": {
    color: "#A51008",
  },

  "& .MuiPickersDay-root": {
    backgroundColor: "#F5F5F5",
    "&.Mui-selected": {
      backgroundColor: "#A51008",
      color: "#ffffff",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#b51016",
    },
    "&:hover": {
      backgroundColor: "#A510081A",
    },
  },

  "& .MuiYearCalendar-root .MuiPickersYear-yearButton": {
    color: "#A51008",
    "&.Mui-selected": {
      backgroundColor: "#A51008",
      color: "#ffffff",
    },
    "&:hover": {
      backgroundColor: "#A510081A",
    },
  },
}));

type Prop = {
  doctorDetailId: string;
  time?: string;
  date?: string;
  setDate: (value: string) => void;
  setTime: (value: string) => void;
  setAppointmentId: (value: string) => void;
};
export const AppointmentSchedule = ({
  doctorDetailId,
  date,
  time,
  setDate,
  setTime,
  setAppointmentId,
}: Prop) => {
  const timePickerRef = useRef<TimePickerModalHandler>(null);
  const [createAppointment, { isLoading: isCreating }] =
    useCreateAppointmentMutation();
  const { data: sessionData } = useSession();
  const user = sessionData?.user;

  const handleDateChange = (dataValue: any) => {
    timePickerRef.current?.show();
    setDate(dataValue.format("YYYY-MM-DD"));
  };

  const handleOnclick = async () => {
    if (time && date) {
      try {
        const response = await createAppointment({
          userId: user?.id,
          body: {
            doctorDetailId,
            appointmentTime: new Date(`${date} ${time}`),
          },
        });

        setAppointmentId((response as any).data.data.id);
      } catch (e) {
        toast.error("Some thing went to wrong! Please try again later");
      }
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="50%"
      paddingX={20}
      paddingBottom={6}
    >
      <div style={{ minWidth: "300px" }}>
        <TimePickerModal ref={timePickerRef} setTime={setTime} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CustomDateCalendar onChange={handleDateChange} />
        </LocalizationProvider>
      </div>
      <div>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="600">Date</Typography>
          <Typography fontWeight="600">
            {date && time ? date : "Not Selected"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="600">Time</Typography>
          <Typography fontWeight="600">{time || "Not Selected"}</Typography>
        </Box>
      </div>
      <ContainedButton
        fullWidth
        backgroundColor="#000000"
        onClick={handleOnclick}
        disabled={isCreating}
      >
        Continue
      </ContainedButton>
    </Box>
  );
};
