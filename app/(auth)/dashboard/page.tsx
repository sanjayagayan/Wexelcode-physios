import API from "constants/appointment";
import DashboardPage1 from "modules/dashboard/DashboardPage1";
import DashboardPage2 from "modules/dashboard/DashboardPage2";
import { notFound } from "next/navigation";
import { auth } from "utils/auth";
import request from "utils/request";

export default async function page() {
  try {
    const authRes = await auth();
    const appointment = await request(API.GET_APPOINTMENTS, {
      userId: authRes?.user.id,
      query: "limit=10",
    });
    console.log(process.env.NEXT_PUBLIC_BASE_URL);

    return <DashboardPage2/>
    // return appointment.data.totalResults < 1 ? (
    //   <DashboardPage1 />
    // ) : (
    //   <DashboardPage2 />
    // );
  } catch (e) {
    console.log(e);
    notFound();
  }
}

