import API from "constants/doctor";
import DoctorsPage from "modules/Physios/DoctorsPage";
import { notFound } from "next/navigation";
import request from "utils/request";

export default async function page() {
  try {
    const doctorDetails = await request(API.GET_DOCTORS, {}, false, false);
    
    return <DoctorsPage doctorDetails={doctorDetails?.data?.results} />;
  } catch (e) {
    console.log(e);
    notFound();
  }
}
