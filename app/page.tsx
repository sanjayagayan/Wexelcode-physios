import Layout from "@/components/layout/layout";
import Home from "modules/home/Home";
import { Metadata } from "next";

const title = "WexelCode";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  creator: "thaksharadhananjaya@gmail.com",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function page() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
