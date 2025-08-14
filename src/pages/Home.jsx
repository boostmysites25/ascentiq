import React from "react";
// import icon1 from "../assets/images/Vector.png";
// import icon2 from "../assets/images/Vector(1).png";
// import icon3 from "../assets/images/Vector(2).png";
import bannerImg from "../assets/images/banner.jpg";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { FaBrain, FaChartBar, FaMobileAlt } from "react-icons/fa";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen relative text-white">
        <div className="absolute top-0 w-full h-full bg-black/50"></div>
        <img
          loading="lazy"
          src={bannerImg}
          srcset={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          class="w-full h-full absolute -z-10 object-cover object-center"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="sub-heading !text-[2rem] !font-bold">
            Welcome to
            {/* <span className="text-primary font-semibold">
               AscentiQ AI
            </span> */}
          </p>
          <h1 className="heading  !text-white ">
            {" "}
            AscentiQ <span className="!text-[#e6b02b]">AI</span>
          </h1>
          <p className="sub-heading !text-[2rem]">
            AI Meets Integrity - Empowering Innovation with Intelligence
          </p>
        </div>
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-[#0A1828] hover:bg-secondary group rounded-lg p-5 text-white hover:text-black transition-all duration-300">
          <div className="flex gap-3 mb-4 items-center">
            <FaBrain className="  text-4xl" />
            <p className="text-lg leading-tight font-medium ">
              Artificial Intelligence Development
            </p>
          </div>
          <p className="desc group-hover:text-black transition-all duration-300">
            Build intelligent systems with machine learning, NLP, and automation
            solutions tailored to your business.
          </p>
        </div>

        <div className="bg-[#0A1828] hover:bg-secondary group rounded-lg p-5 text-white hover:text-black transition-all duration-300">
          <div className="flex gap-3 mb-4 items-center">
            <FaChartBar className=" text-4xl" />
            <p className="text-lg leading-tight font-medium ">
              Data Analytics & Business Intelligence
            </p>
          </div>
          <p className="desc group-hover:text-black transition-all duration-300">
            Unlock valuable insights from your data with analytics and reporting
            that drive strategic decision-making.
          </p>
        </div>

        <div className="bg-[#0A1828] hover:bg-secondary group rounded-lg p-5 text-white hover:text-black transition-all duration-300">
          <div className="flex gap-3 mb-4 items-center">
            <FaMobileAlt className=" text-4xl" />
            <p className="text-lg leading-tight font-medium ">
              Mobile & Web Development
            </p>
          </div>
          <p className="desc group-hover:text-black transition-all duration-300">
            We deliver seamless and responsive applications that bring your
            ideas to life across devices.
          </p>
        </div>
      </div>

      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg}
              width="600"
              height="600"
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg}
                  width="200"
                  height="200"
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Transforming Ideas into Reality with Cutting-Edge Technologies
              </h2>
              <p className="desc">
                At <b>AscentiQ AI</b>, we’re not just a technology provider –
                we’re your innovation partner. With a team of passionate
                problem-solvers and forward-thinking creatives, we specialize in
                delivering high-end solutions that drive tangible results. From
                Artificial Intelligence and Data Analytics to Web & Mobile
                Development and Game Design, our mission is to help businesses
                thrive in the digital age.
                <br />
                <br />
                Whether you're aiming to automate processes, enhance user
                experience, or scale with emerging technologies, we’re here to
                guide you every step of the way. Our focus on quality,
                collaboration, and tailored solutions ensures you’re not just
                keeping up—you’re staying ahead.
              </p>
            </div>

            <div className="w-fit mt-4 justify-center lg:justify-start">
              <Link to="/about-us" className="primary-btn">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AllServices />
      <TrustWorthySection />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
