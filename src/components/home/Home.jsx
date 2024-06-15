import React from "react";
import Herosection from "./Herosection";
import RichtextSection from "./RichtextSection";
import Homesection1 from "./Homesection1";
import Homesection2 from "./Homesection2";
import Fearures from "./Fearures";
import Partners from "./Partners";
import LatestBlog from "./LatestBlog";
import Newsletter from "./Newsletter";
// import Profile from "./Profile";
const Home = () => {
  return (
    <div>
      <Herosection />
      {/* <Profile /> */}
      <RichtextSection />
      <Homesection1 />
      <Homesection2 />
      <Fearures />
      <Partners />
      <LatestBlog />
      <Newsletter />
    </div>
  );
};

export default Home;
