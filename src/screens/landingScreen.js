import React from "react";
import CommonTag from "../common_component/commonTag";
import Shoe from "../assets/images/shoe.png";
import Logo from "../assets/images/logo-mark.png";
import { PRODUCT_DETAILS_STRINGS } from "../utils/constant";

const LandingScreen = () => {
  return (
    <CommonTag
      containerTag="div"
      className=" flex justify-center items-center w-full h-screen p-7 bg-[#e95247]"
      variant="rwd"
    >
      <CommonTag containerTag="div" className=" flex w-fit justify-center">
        <CommonTag
          containerTag="div"
          className="block max-w-md  p-6 bg-white border border-gray-200 rounded-2xl shadow text-center"
        >
          <CommonTag className="flex items-center flex-col">
            <img src={Logo} alt="logo" className="mb-9 w-14" />
            <img src={Shoe} alt="shoe" className="mb-9 w-2/4" />
          </CommonTag>

          <h2 className="bg-gradient-to-r text-center from-[#e95247] to-[#3d3e42] inline-block text-transparent bg-clip-text uppercase text-lg lg:text-2xl mb-5 font-black text-center w-full">
            {PRODUCT_DETAILS_STRINGS.Product_Name}
          </h2>
          <h3 className=" text-[#e95247] mb-3">
            {PRODUCT_DETAILS_STRINGS.Product_Title}
          </h3>
          <h3 className=" text-[#deddde] mb-4">
            {PRODUCT_DETAILS_STRINGS.Product_Heading}
          </h3>
          <p className="text-[#d8d8d8] text-sm mb-9">
            {PRODUCT_DETAILS_STRINGS.Product_Discription}
          </p>
          <CommonTag
            containerTag="div"
            className="flex items-center justify-center mb-8"
          >
            <CommonTag
              containerTag="span"
              className="rounded-full bg-[#3d3e42] h-6 w-6 mr-2"
            ></CommonTag>
            <CommonTag
              containerTag="span"
              className="rounded-full bg-[#d1272e] h-6 w-6 mr-2"
            ></CommonTag>
            <CommonTag
              containerTag="span"
              className="rounded-full bg-[#f6f6f6] h-6 w-6"
            ></CommonTag>
          </CommonTag>
          <CommonTag
            containerTag="button"
            className="border-[#e95247] rounded-full border-2 py-2 px-8 text-[#e95247] text-base font-bold uppercase"
          >
            {PRODUCT_DETAILS_STRINGS.Product_Button}
          </CommonTag>
        </CommonTag>
      </CommonTag>
    </CommonTag>
  );
};

export default LandingScreen;
