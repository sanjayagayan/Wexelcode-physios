import API from "constants/appointment";
import AppointmentPageView from "modules/appointments/AppointmentPageView";
import { notFound } from "next/navigation";
import { auth } from "utils/auth";
import request from "utils/request";

export default async function page({ params }: { params: { id: string } }) {
  try {
    const authRes = await auth();

    const appointment = await request(API.GET_APPOINTMENT, {
      userId: authRes?.user.id,
      appointmentId: params?.id,
    });

    return <AppointmentPageView appointment={appointment.data} />;
  } catch (e) {
    console.log(e);
    notFound();
  }
}
