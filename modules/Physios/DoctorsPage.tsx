//import SearchBox from "@/components/ui/SearchBox";
import { DoctorDetailCard } from "./DoctorDetailsCard";
import { Box, Grid } from "@mui/material";
import DoctorDetail from "models/doctor-detail.model";

type Props = {
  doctorDetails: DoctorDetail[];
};
export default function DoctorsPage({ doctorDetails }: Readonly<Props>) {
  return (
    <>
      {/* <Box marginBottom={5}>
        <SearchBox />
      </Box> */}
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {doctorDetails.map((doctorDetail) => (
          <Grid key={doctorDetail.id} item xs={2} sm={43} md={3}>
            <DoctorDetailCard doctorDetail={doctorDetail} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
