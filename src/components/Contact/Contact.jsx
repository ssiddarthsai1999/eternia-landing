import React from 'react'
import "./Contact.css"

function Contact() {
  return (
      <div className="flex-col flex  w-full mx-auto justify-center items-center align-middle  ">
          <h1 className=" mb-5 max-w-[1300px] servicetextColor">
              Ready to experience the power of connection and the comfort of
              Eternia.ai?
          </h1>

          <a href="#">
              <button className="linearbutton  mt-10 mx-auto justify-center flex   p-3 rounded-full mb-10  text-lg px-10 font-bold relative items-center align-middle ">
                  Create your account
              </button>
          </a>
      </div>
  );
}

export default Contact