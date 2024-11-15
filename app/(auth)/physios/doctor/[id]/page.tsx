import API from "constants/doctor";
import DoctorViewPage from "modules/Physios/DoctorViewPage/DoctorViewPage";
import { notFound } from "next/navigation";
import request from "utils/request";

export default async function page({ params }: { params: { id: string } }) {
  try {
    const doctorDetailsResult = await request(API.GET_DOCTORS, {
      query: `id=${params?.id}`,
    });

    const doctorDetails = doctorDetailsResult?.data?.results;
    if (doctorDetails.length < 1) {
      notFound();
    }

    return <DoctorViewPage doctorDetail={doctorDetails[0]} />;
  } catch (e) {
    console.log(e);
    notFound();
  }
}
