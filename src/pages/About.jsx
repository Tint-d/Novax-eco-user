import React from "react";
import Layout from "../Layout";
import HeroPhoto from "../image/about1.png";
import Map from "../image/about2.png";
import AnimationLayout from "../AnimationLayout";
const About = () => {
  return (
    <Layout>
      <div className=" bg-white flex   flex-col ">
        <div className="">
          <div className="flex mx-auto flex-col py-5 items-center">
            <AnimationLayout>
              <h2 className="text-[35px] text-center font-bold text-header tracking-wide">
                We're here to
              </h2>
              <h2 className="text-[35px]  text-center leading-7 font-bold text-[#ffc800] tracking-wide">
                gurantee your success
              </h2>
            </AnimationLayout>
          </div>

          <div className="">
            <div className="relative  min-h-0 md:min-h-[75vh]">
              <div className="md:w-10/12 w-11/12   border-[1px] border-slate-200 mx-auto  md:p-5 p-2 text-header shadow bg-[#f1f0f097]  rounded-md">
                <AnimationLayout>
                  <h2 className=" tex-[14px] p-1 md:p-10 text-normal font-normal tracking-wider leading-6 md:leading-7 font-serif  ">
                    ConsultUs provides consulting services that help business
                    owners and leaders build a more valuable business. We worked
                    with their founder to build a professional, modern site that
                    follows the StoryBrand framework to clearly communicates the
                    value it adds to potential clients
                  </h2>
                </AnimationLayout>
                <AnimationLayout>
                  <div className="absolute top-[90%] md:top-[35%]  left-[10%] w-10/12">
                    <img
                      src={HeroPhoto}
                      className=" min-h-[300px] object-cover "
                      alt=""
                    />
                  </div>
                </AnimationLayout>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" flex flex-col mt-20 md:mt-10   pt-20 items-center">
            <AnimationLayout>
              <h2 className="text-[35px] font-bold text-header tracking-wide">
                We're here for you
              </h2>
            </AnimationLayout>
            <AnimationLayout>
              <h2 className="text-[35px] text-center leading-8 font-bold text-[#ffc800] tracking-wide">
                No matter where you are
              </h2>
            </AnimationLayout>
          </div>
          <div className=" py-5 flex justify-center ">
            <AnimationLayout>
              <img src={Map} className=" mx-auto max-h-[350px]" alt="" />
            </AnimationLayout>
          </div>
        </div>
        <AnimationLayout>
          <div className="md:w-10/12 w-11/12 py-2 mx-auto">
            <AnimationLayout>
              <h2 className=" text-header text-[40px] font-serif font-bold py-2 border-b-2 border-slate-400 w-fit ">
                Our <span className=" text-brand">Mission</span>
              </h2>
            </AnimationLayout>
            <div className=" flex py-2 flex-col ">
              <div className="flex md:justify-start justify-around">
                <h2 className=" md:w-3/12 w-4/12 text-header text-[18px] font-semibold">
                  Unmatched service
                </h2>
                <h2 className="font-serif md:w-8/12 w-7/12 text-normal font-medium text-[16px]">
                  Support corporate clients and financial investors with their
                  growth strategy and international development.
                </h2>
              </div>
            </div>
            <div className=" flex py-2 flex-col">
              <div className="flex md:justify-start justify-around">
                <h2 className=" md:w-3/12 w-4/12 text-header text-[18px] font-semibold">
                  Experience
                </h2>
                <h2 className="font-serif md:w-8/12 w-7/12 text-normal font-medium text-[16px]">
                  Experience in working with and assisting a wide range of
                  clients from international corporations to small/medium-sized
                  businesses, from large corporate debt providers to mid-market
                  private equity investors.
                </h2>
              </div>
            </div>
            <div className=" flex py-2 flex-col">
              <div className="flex md:justify-start justify-around">
                <h2 className=" md:w-3/12 w-4/12 text-header text-[18px] font-semibold">
                  Specific
                </h2>
                <h2 className="font-serif md:w-8/12 w-7/12 text-normal font-medium text-[16px]">
                  ConsultUs’ core expertise lies in the ability to support our
                  clients in understanding, analysing and executing commercial
                  and investment strategies in specific markets.
                </h2>
              </div>
            </div>
            <div className=" flex py-2 flex-col">
              <div className="flex md:justify-start justify-around">
                <h2 className=" md:w-3/12 w-4/12 text-header text-[18px] font-semibold">
                  Technology
                </h2>
                <h2 className="font-serif md:w-8/12 w-7/12 text-normal font-medium text-[16px]">
                  The best combination of technology and people.
                </h2>
              </div>
            </div>
          </div>
        </AnimationLayout>
        <AnimationLayout>
          <div className="md:w-10/12 w-11/12 py-2 mx-auto">
            <h2 className=" text-header text-[40px] font-serif font-bold py-3 border-b-2 border-slate-400 w-fit ">
              Our <span className=" text-brand">Commitment</span>
            </h2>
            <div className=" flex py-2 flex-col">
              <div className="flex md:justify-start justify-around">
                <h2 className=" md:w-3/12 w-4/12 text-header text-[18px] font-semibold">
                  Ethics
                </h2>
                <h2 className="font-serif md:w-8/12 w-7/12 text-normal font-medium text-[16px]">
                  Ethics for ConsultUs means ensuring our customers the
                  confidentiality and uniqueness of the service they are
                  provided. A client must be reassured by the fact that the
                  service provided to them is made-to-measure and will not be
                  recycled for their competitors.
                </h2>
              </div>
            </div>
            <div className=" flex py-2 flex-col">
              <div className="flex md:justify-start justify-around">
                <h2 className=" md:w-3/12 w-4/12 text-header text-[18px] font-semibold">
                  Quality
                </h2>
                <h2 className="font-serif md:w-8/12 w-7/12 text-normal font-medium text-[16px]">
                  ConsultUs is committed to ensuring that our advice and
                  recommendations are based on the best combination of methods,
                  information research, creativity and internal quality
                  assurance.
                </h2>
              </div>
            </div>
            <div className=" flex py-2 flex-col">
              <div className="flex md:justify-start justify-around">
                <h2 className=" md:w-3/12 w-4/12 text-header text-[18px] font-semibold">
                  Continuity
                </h2>
                <h2 className="font-serif md:w-8/12 w-7/12 text-normal font-medium text-[16px]">
                  ConsultUs considers that the continuity of relations on the
                  long term with its clients is the guarantee of the
                  satisfaction of these and the quality of the services
                  provided.
                </h2>
              </div>
            </div>
          </div>
        </AnimationLayout>
      </div>
    </Layout>
  );
};

export default About;
