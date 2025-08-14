import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
import aboutImg2 from "../assets/images/aboutus-img2.webp";
import aboutImg3 from "../assets/images/home-about-img.jpeg";
// import teamImg1 from "../assets/images/team1.jpeg";
// import teamImg2 from "../assets/images/team2.jpeg";
// import teamImg3 from "../assets/images/team3.jpeg";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  // const [selectedImg, setSelectedImg] = React.useState(0);
  // const images = [teamImg1, teamImg2, teamImg3];

  // const imgChangeInterval = setInterval(() => {
  //   setSelectedImg(selectedImg === 2 ? 0 : selectedImg + 1);
  // }, 1000);

  // useEffect(() => {
  //   return () => clearInterval(imgChangeInterval);
  // }, [imgChangeInterval]);
  return (
    <>
      <WebsiteHeader />
      <PageBanner
        title="About Us"
        desc={
          "Transform your business with AscentiQ AI—where innovation meets digital excellence. From AI and Data Analytics to Web, App, and Game Development, we deliver impactful solutions tailored to your needs."
        }
      />
      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              {/* <SubHeading heading="About Us" /> */}
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Transforming Ideas into Reality with Technology
              </h2>
              <p className="desc">
                At <b>AscentiQ AI</b>, we’re more than a tech company—we're your
                partner in digital transformation. With a team of passionate
                innovators and creative thinkers, we deliver tailored solutions
                in Artificial Intelligence, Data Analytics, Cloud Computing, Web
                & App Development, Game Design, and more.
                <br />
                <br />
                Our mission is simple: to help businesses like yours thrive in a
                rapidly evolving digital world. Through collaboration,
                innovation, and a relentless pursuit of excellence, we develop
                solutions that drive real impact.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-[2rem]">
          <h2 className="text-xl font-medium">
            Where Technology Meets Integrity
          </h2>
          <p className="desc mt-2">
            Every solution we build at <b>AscentiQ AI</b> is grounded in our
            core values—integrity, transparency, and excellence. We believe that
            innovation should be responsible and results should be measurable.
            By fostering trust and long-term partnerships, we help businesses
            not only solve today’s problems but also prepare for tomorrow’s
            opportunities.
          </p>
        </div>

        <div className="mt-[3rem]">
          <h2 data-aos="fade-up" className="heading-2 text-center">
            Our Visionary Goals
          </h2>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-up"
              className="flex h-full items-center md:items-start flex-col gap-7"
            >
              <p className="desc">
                Our vision at <b>AscentiQ AI</b> is to be the driving force
                behind digital innovation— enabling businesses to lead, grow,
                and adapt with confidence. We aim to deliver future-ready
                solutions that empower organizations to thrive in a world shaped
                by technology.
                <br />
                <br />
                Whether you’re a startup aiming to scale or an enterprise
                optimizing complex operations, our team of engineers, data
                scientists, and business strategists are here to help you
                harness the full potential of digital transformation.
              </p>
            </div>
            <div data-aos="fade-up" className="h-full">
              <img
                loading="lazy"
                src={aboutImg2}
                className="object-cover w-full max-h-[20rem] rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <TrustWorthySection />
      <section className="wrapper py-[3rem] bg-tertiarytwo">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="h-full">
            <img
              loading="lazy"
              src={aboutImg3}
              className="object-cover h-full w-full max-h-[20rem] rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center lg:items-start flex-col gap-7"
          >
            <p className="desc ">
              At <b>AscentiQ AI</b>, our mission is to help businesses stay
              ahead in an ever-evolving digital landscape by harnessing the best
              of modern technology. We’re passionate about turning bold ideas
              into impactful digital solutions—guided by integrity, innovation,
              and a customer-first mindset.
              <br />
              <br />
              Whether it’s building AI-driven tools, automating complex
              workflows, or creating immersive digital experiences, we are
              committed to delivering transformative results rooted in
              responsibility and long-term value. Through collaboration and
              creativity, we bring ideas to life and unlock the full potential
              of every client’s vision.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      {/* <section className="text-white wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="Our Expert Team" />
              <h2 className="heading-2">Meet Our Team</h2>
              <p className="desc">
                At <b> AscentiQ AI</b>, our team is at the heart of every
                solution we provide. Combining expertise, innovation, and a deep
                commitment to client success, our professionals are dedicated to
                transforming complex challenges into seamless experiences. From
                developers and designers to strategists and support specialists,
                each team member brings unique skills that drive our mission
                forward. Get to know the people powering the next generation of
                digital solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="h-full w-full">
            <div
              className={`h-full grid gap-3 grid-cols-4
            `}
            >
              {images.map((img, id) => (
                <div
                  className={`
                    relative w-full h-full aspect-[4/5] rounded-xl overflow-hidden
                    ${
                      selectedImg === id
                        ? "col-span-2 shadow-large shadow-primary/50"
                        : "col-span-1"
                    }
                  `}
                  key={id}
                >
                  {selectedImg !== id && (
                    <div className="absolute top-0 w-full h-full bg-secondary/80 z-0"></div>
                  )}
                  <img
                    loading="lazy"
                    src={img}
                    className="-z-10 h-full w-full object-cover"
                    alt=""
                  />
                  {selectedImg === id && (
                    <div className="rounded-lg absolute p-2 bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-tertiary text-center text-white">
                      <h6 className="font-medium">Liam Smith</h6>
                      <p className="text-primary text-[.8rem]">
                        CEO & Co-Founder
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
