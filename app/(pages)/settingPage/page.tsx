// setting page  ...
import Image from "next/image";
import React from "react";
import { authOptions } from "@/libs/AuthOptions";
import settingProfile from "../../../public/assets/settingProfile.png";
import iconImage from "../../../public/assets/icon.png";
import edit from "../../../public/assets/edit.png";
import { getServerSession } from "next-auth";
import LogoutBtn from "@/components/LogoutBtn";
export default async function page() {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg">
      <div className="w-auto flex">
        <Image
          src={iconImage}
          alt=""
          className=" ml-[24px] pt-[24px] left-[24px]  "
        />
        <LogoutBtn />
      </div>
      <div>
        <div className="  flex flex-col items-center">
          <h2 className=" text-[#F4F4F4] text-[40px] mt-[80px] pl-[32px] font-Stint Ultra Condensed   md:text-[64px] font-medium leading-[39px]">
            Settings <span className="text-[#FF7315] ml-[-16px]">.</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <Image src={settingProfile} alt="" className="mt-[70px]" />
          <Image src={edit} alt="" className="mt-[170px] ml-[-35px]" />
        </div>
        <div className="flex justify-center">
          <h2 className="w-[234px] h-[39px] mt-[11px] text-[#F4F4F4] font-ibm-plex-mono font-mono text-30 font-normal leading-39 text-center">
            Profile Photo
          </h2>
        </div>
        <div className="flex justify-center">
          <div>
            <h2 className="text-[#F4F4F4] mt-[44px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px]">
              Name
            </h2>
            <input
              type="text"
              placeholder={session?.user?.name ?? "Enter your Name"}
              className="placeholder-[#F4F4F4] text-[white] bg-[#232020] mt-[16px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] border-[#FF7315] w-[307px] sm:w-[447px] h-[58px]"
            />
          </div>
        </div>
        <div className="flex justify-center mt-[32px]">
          <div>
            <h2 className="text-[#F4F4F4] font-ibm-plex-mono pl-[32px] text-2xl font-medium leading-[39px]">
              Email
            </h2>
            <input
              type="email"
              placeholder={session?.user?.email ?? "Enter Your Email"}
              className="placeholder-[#F4F4F4] text-[white] pl-[32px] bg-[#232020] mt-[16px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] border-[#FF7315] w-[307px] sm:w-[447px] h-[58px]"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row  items-center bg-[#232020] rounded-[55px] border-[5px] w-[318px] h-[63px] border-[#FF7315] gap-3 mt-[64px]">
            <h2 className=" rounded-[30px] text-[#FF7315] text-center bg-[#232020] font-ibm-plex-mono text-2xl font-medium leading-[39px] w-full h-full ps-[8px] py-[12px]">
              Change Password
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[318px] border-[#FF7315] h-[63px] mt-[10px] bg-[#FF7315] text-center border-[5px] rounded-[55px]">
            <button className="font-ibm-plex-mono text-30 font-medium leading-39 text-[#232020] py-[12px] text-center">
              <h2>Sign In</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
