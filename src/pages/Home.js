import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Mentor from "../components/Mentor";
import Pillars from "../components/Pillars";
import Notification from "../components/Notification";
import Course from "../components/Course";
import Services from "../components/Services";
import Footer from "../components/Footer";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <News news=" Admissions are now open at R.S. Patil College of Pharmacy. Don't miss this golden opportunity to shape your future in the pharmaceutical world. Join us to embark on a journey of excellence in education, cutting-edge research, and holistic development. Apply now and secure your spot!  "/>
      <Header />
      <div className="mt-20">

      <Slider/>
      <Mentor/>
      <Pillars/>
      <Notification/>
      <Course/>
      <Services/>
      <Footer/>
      </div>
    </>
  );
};

export default Home;
