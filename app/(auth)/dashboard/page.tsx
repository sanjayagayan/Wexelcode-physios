import API from "constants/appointment";
import Dashboard from "modules/dashboard/Dashboard";
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

    return <Dashboard/>
  } catch (e) {
    console.log(e);
    notFound();
  }
}

