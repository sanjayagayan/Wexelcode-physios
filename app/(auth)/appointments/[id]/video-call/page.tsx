import API from "constants/zoom-token";
import VideoCallPageView from "modules/appointments/VideoCallPageView";
import { notFound } from "next/navigation";
import { auth } from "utils/auth";
import request from "utils/request";

export default async function page({ params }: { params: { id: string } }) {
  try {
    const authRes = await auth();
    const appointmentId = params?.id;
    //
    const tokenData = await request(API.GET_ZOOM_TOKEN, {
      userId: authRes?.user.id,
      appointmentId: params?.id,
    });

    return (
      <VideoCallPageView
        appointmentId={appointmentId}
        token={tokenData?.data?.token}
      />
    );
  } catch (e) {
    console.log(e);
    notFound();
  }
}
