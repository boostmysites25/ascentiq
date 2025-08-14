import React from "react";
import ourValuesIcon1 from "../../assets/images/icons/innovation&excellence.png";
import ourValuesIcon2 from "../../assets/images/icons/integrity&transparency.png";
import SubHeading from "../SubHeading";

const OurValue = () => {
  return (
    <section className="bg-tertiarytwo/95 py-[5rem]">
      <div className="wrapper grid md:grid-cols-2 items-center gap-7">
        <div className="flex flex-col items-start gap-5">
          <SubHeading heading="Our Values" />
          <h2 data-aos="fade-up" className="heading-2 mx-0">
            Integrity at Our Core,
            <br /> Innovation in Our Spirit
          </h2>
          <p data-aos="fade-up" className="desc">
            At AscentiQ AI, our values guide everything we do—from how we
            collaborate with clients to how we innovate with purpose. These
            principles drive us to deliver transformative technology solutions
            that truly make a difference.
          </p>

          <div data-aos="fade-up" className="flex gap-5 mt-2">
            <div className="min-w-[4rem] h-[4rem] bg-background rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon1}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">Innovation</h6>
              <p className="desc">
                We're always exploring new ideas and technologies—staying ahead
                to deliver smarter, better solutions.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="flex gap-5">
            <div className="min-w-[4rem] h-[4rem] bg-background rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon2}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">Integrity</h6>
              <p className="desc">
                We believe in honesty and transparency—building trust through
                every action and decision.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="bg-secondarytwo flex flex-col gap-6 h-full justify-center rounded-xl p-10"
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">Artificial Intelligence Development</p>
              <p className="font-medium">95%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-background h-full w-[95%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">
                Data Analytics and Business Intelligence
              </p>
              <p className="font-medium">98%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-background h-full w-[98%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">Mobile and Web Development</p>
              <p className="font-medium">92%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-background h-full w-[92%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">Game Development</p>
              <p className="font-medium">90%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-background h-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
