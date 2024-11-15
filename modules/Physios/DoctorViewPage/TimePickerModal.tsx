import React, { forwardRef, useImperativeHandle, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import ContainedButton from "@/components/ui/ContainedButton";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";

export interface TimePickerModalHandler {
  show: () => void;
}

interface Prop {
  setTime: (time: string) => void;
}

export const TimePickerModal = forwardRef<TimePickerModalHandler, Prop>(
  ({ setTime }, ref) => {
    const [open, setOpen] = useState(false);
    let time = "";
    const show = () => {
      setOpen(true);
    };

    useImperativeHandle(ref, () => ({
      show,
    }));

    const handleClose = () => {
      setOpen(false);
    };

    const handleTimeSelect = () => {
      setTime(time);
      handleClose();
    };

    const handleTimeChange = (dataValue: any) => {
      time = dataValue.format("hh:mm A");
    };

    return (
      <Dialog
        open={open}
        maxWidth="xs"
        onClose={handleClose}
        aria-labelledby="time-picker-dialog-title"
        aria-describedby="time-picker-dialog-description"
      >
        <DialogTitle id="time-picker-dialog-title">Schedule Time</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label="Enter time" onChange={handleTimeChange} />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <ContainedButton onClick={() => handleTimeSelect()}>
            Set Time
          </ContainedButton>
        </DialogActions>
      </Dialog>
    );
  }
);

TimePickerModal.displayName = "TimePickerModal";
