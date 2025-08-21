import React from "react";
import useReveal from "../hooks/useReveal";

const Contact: React.FC = () => {
  useReveal();

  return (
    <div
      id="contact"
      className="flex font-sans min-h-screen justify-center gap-20 ps-20 items-center text-center bg-gray-900 text-white"
    >
      <div className="flex justify-center reveal delay-1">
        <img src="contact.png" alt="contact" className="w-105" />
      </div>

      <div className="w-[50%] flex flex-col gap-4">
        <div className="flex text-[38px] font-bold text-left justify-between items-center reveal delay-2">
          <div>Contact Details</div>
          <div className="border-b-2 border-[#4caf50] w-[50%]" />
        </div>

        <div className="flex flex-col gap-2 text-[15px] reveal delay-3">
          <div className="flex gap-2 text-justify">
            <span className="text-[#66bb6a] min-w-[70px]">Phone:</span>
            <span>+62 878 8217 6442</span>
          </div>
          <div className="flex gap-2 text-justify">
            <span className="text-[#66bb6a] min-w-[70px]">Email:</span>
            <span>aryapancawibowo56@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
