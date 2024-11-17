import { Grid } from "@mui/material";
import { AppointmentCard } from "./AppointmentCard";
import Appointment from "models/appointment.model";

type Props = {
  appointments: Appointment[];
};
const Appointments = ({ appointments }: Props) => {
  return (
    <div className="min-h-screen">
        <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {appointments.map((appointment) => (
        <Grid key={appointment.id} item xs={2} sm={43} md={3}>
          <AppointmentCard appointment={appointment} />
        </Grid>
      ))}
    </Grid>
    </div>
    
  );
};
export default Appointments;
