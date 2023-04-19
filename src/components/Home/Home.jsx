import React from "react";
import Arrow from "../../assets/Arrow.svg";
import "./Home.css";




function Home() {
  return (
      <div className="homeContainer w-full  ">
          <div className="flex flex-col  p-2 md:p-4 max-w-[1400px] mx-auto ">
              <h2 className="leading-10 font-bold  mb-3 md:mb-[30px] text-center headingTextColor">
                  Welcome to Eternia.ai
              </h2>
              <h2 className="leading-10 font-normal md:text-2xl lg:text-3xl mb-3 md:mb-[100px] text-center text-white homepara">
                  A virtual bridge to your loved ones
              </h2>
              <a href="#">
                  <button className=" mx-auto justify-center flex   p-3 rounded-full mb-3  text-lg px-10 font-bold relative items-center align-middle linearbutton">
                      Get Started
                      <i
                          class="fa-solid fa-arrow-right"
                          style={{ color: "#ffffff", marginLeft: "10px" }}
                      ></i>
                  </button>
              </a>
          </div>
      </div>
  );
}

export default Home;
