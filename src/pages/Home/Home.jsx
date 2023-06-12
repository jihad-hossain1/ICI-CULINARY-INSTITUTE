import React from "react";
import Banner from "./banner/Banner";
import Classess from "./classes/Classess";
import PageTitle from "../../components/pageTitle/PageTitle";
import Instructors from "./instructors/Instructors";
import OurPrincipal from "./addMoreSection/OurPrincipal";
import SearchCourse from "./addMoreSection/SearchCourse";

const Home = () => {
  return (
    <div className="pt-2">
      <div className="mt-3">
        <Banner></Banner>
        {/* one more section  start */}
        <OurPrincipal></OurPrincipal>
        {/* one more section  end */}
        <PageTitle
          subHeading={`Best Class Student Are Choice`}
          heading={`Classes`}
        ></PageTitle>
        <Classess></Classess>

        <PageTitle
          subHeading={`Our Best Instructors Student Are Loved!`}
          heading={`Instructors`}
        ></PageTitle>
        <Instructors></Instructors>
        {/* two more section  start */}
        <SearchCourse></SearchCourse>
        {/* two more section  end */}
      </div>
    </div>
  );
};

export default Home;
