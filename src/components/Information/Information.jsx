import React from "react";
import feelings from "../../assets/feelings.png"
import "./Information.css";




function Information() {



  return (
      <div className="max-w-[1400px] mx-auto p-2 ">
          <div className="flex flex-col w-full items-center  ">
              <img
                  className="max-w-[268px] w-[150px] mt-[-150px] mb-[80px] sm:w-[268px] sm:mb-[0]  sm:mt-[0]"
                  src={feelings}
              ></img>
          </div>
      </div>
  );
}

export default Information;
