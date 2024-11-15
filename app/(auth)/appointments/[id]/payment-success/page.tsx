import API from "constants/appointment";
import PaymentSuccessPageView from "modules/Physios/DoctorViewPage/payment/PaymentSuccess";
import { notFound } from "next/navigation";
import { auth } from "utils/auth";
import request from "utils/request";

export default async function page({ params }: { params: { id: string } }) {
  try {
    const authRes = await auth();
    await request(API.GET_APPOINTMENT, {
      userId: authRes?.user.id,
      appointmentId: params?.id,
    });
    //
    return <PaymentSuccessPageView appointmentId={params?.id} />;
  } catch (e) {
    console.log(e);
    notFound();
  }
}
