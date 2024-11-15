"use client";

import Banner from "./components/Banner";
import HowItWorks from "./components/HowItWorks";
import WeMakeDifferent from "./components/WeMakeDifferent";
import DetailsBanner from "./components/DetailsBanner";
import GetStarted from "./components/GetStarted";
import SneakPeek from "./components/SneakPeek";
import Blog from "./components/Blog";

import Faq from "./components/Faq";

const Home = () => {
  return (
    <>
      <Banner />
      <HowItWorks />
      <WeMakeDifferent />
      <DetailsBanner />
      <GetStarted />
      <SneakPeek />
      <Blog />
      <Faq />
    </>
  );
};

export default Home;
