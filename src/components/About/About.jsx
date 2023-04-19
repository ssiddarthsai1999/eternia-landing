import React from 'react'
import "./About.css"

function About() {
  return (
      <div className="w-full mb-[100px] sm:mb-[0]">
          <div className="flex flex-col  p-4 md:p-4 max-w-[1400px] mx-auto  items-center ">
              <h1 className="text-center servicetextColor mb-5">About Us</h1>
              <p className="max-w-[1100px] text-[#F4F4F4BF] aboutPara font-light text-left">
                  Eternia.ai harnesses cutting-edge technologies such as
                  deepfakes, voice cloning, natural language processing, and
                  virtual or augmented reality to create an immersive,
                  emotionally engaging, and lifelike experience. Our platform
                  enables you to have meaningful conversations, play games, and
                  share special moments with the virtual avatars of your loved
                  ones, fostering a sense of connection and solace during times
                  when you need their support the most.
              </p>
          </div>
      </div>
  );
}

export default About