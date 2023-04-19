import React from "react";

import serviceblue from "../../assets/serviceblue.png";
import servicered from "../../assets/servicered.png";
import servicepink from "../../assets/servicepink.png";
import serviceyellow from "../../assets/serviceyellow.png";

function Services() {
  const data = [
      {
          header: "Your own Digital Replica",
          para: "While you're alive, record videos and audio files on our platform to create a digital version of yourself. Your loved ones can then interact with your digital replica, ensuring that they feel connected and supported, even when you're separated by distance or time. Our pricing options include a one-time subscription fee or a Netflix-style monthly fee, as well as pay-per-use options. ",
      },
      {
          header: "Digital Replica of a Loved One",
          para: "If your loved one has passed away or is unavailable to provide videos, we can create a digital replica using their social media profiles or by uploading videos and audio files directly. Similar to the first service, pricing options include a one-time subscription fee, a monthly fee, or pay-per-use options. ",
      },
      {
          header: "Pre-recording",
          para: "Pre-record personalized videos and messages to be delivered to your loved ones at a later date. Our system will automatically send your messages at the chosen date and time, ensuring that your presence is felt even when you're not physically there. If you prefer not to pre-record specific videos, our system can generate personalized messages on your behalf, based on your input and preferences. ",
      },
      {
          header: "Pre-ordering",
          para: "Plan ahead by pre-ordering physical items such as flowers, cards, or cakes to be delivered to your loved ones at a later date. This thoughtful service allows you to celebrate special occasions and milestones, even if you're no longer around. ",
      },
  ];
  return (
      <div className="max-w-[1400px] mx-auto">
          <h1 className="text-center servicetextColor">Our Services</h1>
          <div
              id="features"
              className="p-2 flex-col flex mx-auto justify-center items-center "
          >
              <div className="bothContainer  w-full mx-auto flex-col  md:flex-row-reverse md:flex  items-center justify-center  ">
                  <div className="left w-[100%]  my-5 md:w-[50%] p-3    ">
                      <h1 className=" servicesHeading text-left">
                          {data[0].header}
                      </h1>

                      <p className=" my-6 aboutPara">{data[0].para}</p>
                  </div>
                  <div className="right w-[100%]  md:w-[50%] p-3  justify-center flex  ">
                      <img
                          alt="servicepng"
                          className="sm:w-[750px]  sm:h-[600px] w-[350px] h-[350px] object-cover "
                          src={serviceblue}
                      />
                  </div>
              </div>

              <div className="bothContainer   w-full mx-auto flex-col  md:flex-row md:flex mb-[100px] items-center justify-center  ">
                  <div className="left   left w-[100%]  my-5 md:w-[50%]  p-3 ">
                      <h1 className="servicesHeading text-left">
                          {data[1].header}
                      </h1>
                      <p className="aboutPara my-6 ">{data[1].para}</p>
                  </div>
                  <div className="right w-[100%]  md:w-[50%] p-3  justify-center flex    ">
                      {" "}
                      <img
                          alt="servicepng"
                          className="sm:w-[750px]  sm:h-[600px] w-[350px] h-[350px] object-cover "
                          src={serviceyellow}
                      />
                  </div>
              </div>

              <div className="bothContainer  w-full mx-auto flex-col  md:flex-row-reverse md:flex  items-center justify-center  ">
                  <div className="left w-[100%]  my-5 md:w-[50%] p-3    ">
                      <h1 className=" servicesHeading text-left">
                          {data[2].header}
                      </h1>

                      <p className=" my-6 aboutPara">{data[2].para}</p>
                  </div>
                  <div className="right w-[100%]  md:w-[50%] p-3  justify-center flex  ">
                      <img
                          alt="servicepng"
                          className="sm:w-[750px]  sm:h-[600px] w-[350px] h-[350px] object-cover "
                          src={servicered}
                      />
                  </div>
              </div>

              <div className="bothContainer   w-full mx-auto flex-col  md:flex-row md:flex mb-[100px] items-center justify-center  ">
                  <div className="left   left w-[100%]  my-5 md:w-[50%]  p-3 ">
                      <h1 className="servicesHeading text-left">
                          {data[3].header}
                      </h1>
                      <p className="aboutPara my-6 ">{data[3].para}</p>
                  </div>
                  <div className="right w-[100%]  md:w-[50%] p-3   justify-center flex    ">
                      {" "}
                      <img
                          alt="servicepng"
                          className="sm:w-[750px]  sm:h-[600px] w-[350px] h-[350px] object-cover "
                          src={servicepink}
                      />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Services;
