import * as Checkbox from "@radix-ui/react-checkbox";
import * as Toggle from "@radix-ui/react-toggle";

import Graphic from "../../assets/images/graphic.svg";
import photoDriver1 from "../../assets/images/photoDriver1.svg";
import photoDriver2 from "../../assets/images/photoDriver2.svg";
import photoDriver3 from "../../assets/images/photoDriver3.svg";
import photoDriver4 from "../../assets/images/photoDriver4.svg";
import photoDriver5 from "../../assets/images/photoDriver5.svg";
import photoDriver6 from "../../assets/images/photoDriver6.svg";
import avatar1 from "../../assets/images/avatar/profile_photo-1.svg";
import avatar2 from "../../assets/images/avatar/profile_photo-2.svg";
import avatar3 from "../../assets/images/avatar/profile_photo-3.svg";
import avatar4 from "../../assets/images/avatar/profile_photo-4.svg";
import avatar5 from "../../assets/images/avatar/profile_photo-5.svg";

import {
  RiFolderOpenFill,
  RiArrowDropRightLine,
  RiCheckLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

import TopDrivers from "../../components/TopDrivers";
import DashboardStat from "../../components/DashboardStat";

const Dashboard = () => {
  return (
    // container
    <div className="flex flex-col">
      {/* Topside */}
      <div className="flex mt-6 mb-8 max-h-[780px]">
        {/* KnowledBase */}
        <div className="w-[55%]">
          <h1 className="text-black font-mont font-extrabold text-xl mb-6">
            Knowledge base
          </h1>
          <div className="relative">
            <div className="bg-shs absolute right-0 top-0 z-[2] w-36 h-full"></div>
            <div className="flex shrink-0 overflow-hidden mb-6 hover:overflow-auto p-4">
              <div
                className={`flex text-blue-600 bg-blue-300 opacity-80 px-4 py-10 min-w-[30%] justify-between items-center rounded-xl mr-4`}
              >
                <RiFolderOpenFill className="w-8 h-8 opacity-100" />
                <span className="font-mont text-sm font-semibold opacity-100 truncate">
                  Total Order
                </span>
                <RiArrowDropRightLine className="fill-black min-w-8 min-h-8 opacity-100" />
              </div>
              <div
                className={`flex text-red-600 bg-red-300 opacity-80 px-4 py-10 min-w-[30%] justify-between items-center rounded-xl mr-4`}
              >
                <RiFolderOpenFill className="w-8 h-8 opacity-100" />
                <span className="font-mont text-sm font-semibold opacity-100 truncate">
                  Total Earning
                </span>
                <RiArrowDropRightLine className="fill-black min-w-8 min-h-8 opacity-100" />
              </div>
              <div
                className={`flex text-yellow-600 bg-yellow-300 opacity-80 px-4 py-10 min-w-[30%] justify-between items-center rounded-xl mr-4`}
              >
                <RiFolderOpenFill className="w-8 h-8 opacity-100" />
                <span className="font-mont text-sm font-semibold opacity-100 truncate">
                  ProfitM
                </span>
                <RiArrowDropRightLine className="fill-black min-w-8 min-h-8 opacity-100" />
              </div>
              <div
                className={`flex text-green-600 bg-green-300 opacity-80 px-4 py-10 min-w-[30%] justify-between items-center rounded-xl mr-4`}
              >
                <RiFolderOpenFill className="w-8 h-8 opacity-100" />
                <span className="font-mont text-sm font-semibold opacity-100 truncate">
                  Audio files
                </span>
                <RiArrowDropRightLine className="fill-black min-w-8 min-h-8 opacity-100" />
              </div>
            </div>
          </div>
          <img src={Graphic} className="w-full max-h-[558px]" />
        </div>
        {/* TopDrivers */}
        <div className="ml-8 w-[45%] overflow-auto">
          <h1 className="text-black font-mont font-extrabold text-xl mb-6">
            Top drivers
          </h1>
          <div className="flex flex-col gap-3">
            <TopDrivers
              picture={photoDriver1}
              name="Maharrm Hasanli"
              phone="+998 (99) 436-46-15"
              orders={5}
              income={98}
            />
            <TopDrivers
              picture={photoDriver5}
              name="Gina Garza"
              phone="+998 (99) 158-10-15"
              orders={5}
              income={15}
            />
            <TopDrivers
              picture={photoDriver6}
              name="Brian Reed"
              phone="+998 (99) 436-46-15"
              orders={5}
              income={23}
            />
            <TopDrivers
              picture={photoDriver2}
              name="Tammy Spencer"
              phone="+998 (99) 436-46-15"
              orders={5}
              income={98}
            />
            <TopDrivers
              picture={photoDriver3}
              name="Joseph Brooks"
              phone="+998 (99) 436-46-15"
              orders={5}
              income={98}
            />
            <TopDrivers
              picture={photoDriver4}
              name="Juan Steward"
              phone="+998 (99) 436-46-15"
              orders={5}
              income={98}
            />
          </div>
        </div>
      </div>
      {/* Botside */}
      <div className="grid grid-cols-7 grid-rows-1 text-black bg-[#F7F8FA] py-4 mb-4 rounded-lg">
        <Checkbox.Root className="w-6 h-6 bg-white border-2 rounded p-[2px] mx-auto">
          <Checkbox.Indicator>
            <RiCheckLine />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <strong>User</strong>
        <strong className="mx-auto">Car Comfort</strong>
        <strong className="mx-auto">Ordered Time</strong>
        <strong className="mx-auto">Start Location</strong>
        <strong className="mx-auto">Finish Location</strong>
        <strong className="mx-auto">Income</strong>
      </div>
      <div className="flex flex-col gap-4 border-b-2 pb-8 full border-b-slate-50">
        <DashboardStat
          image={avatar1}
          name="Sierra Ferguson"
          phone="+998 (99) 436-46-15"
          carConfort="simple"
          orderedTime="04.12.2021 20:30"
          startLocation="пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston"
          finishLocation="пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston"
          income="50 300 000 SUM"
        />
        <DashboardStat
          image={avatar2}
          name="Sierra Ferguson"
          phone="+998 (99) 436-46-15"
          carConfort="otra"
          orderedTime="04.12.2021 20:30"
          startLocation="21 Hamidulla Oripov ko'chasi, Тошкент, Oʻzbekiston"
          finishLocation="21 Hamidulla Oripov ko'chasi, Тошкент, Oʻzbekiston"
          income="300 000 SUM"
        />
        <DashboardStat
          image={avatar3}
          name="Sierra Ferguson"
          phone="+998 (99) 436-46-15"
          carConfort="convenient"
          orderedTime="04.12.2021 20:24"
          startLocation="76 Фарғона Йўли, Тошкент, Oʻzbekiston"
          finishLocation="76 Фарғона Йўли, Тошкент, Oʻzbekiston"
          income="5 300 000 SUM"
        />
        <DashboardStat
          image={avatar4}
          name="Sierra Ferguson"
          phone="+998 (99) 436-46-15"
          carConfort="convenient"
          orderedTime="17.11.2021 12:19	"
          startLocation="13 Kumarik ko'chasi, Tashkent 100167, Oʻzbekiston"
          finishLocation="13 Kumarik ko'chasi, Tashkent 100167, Oʻzbekiston"
          income="500 300 000 SUM"
        />
        <DashboardStat
          image={avatar5}
          name="Sierra Ferguson"
          phone="+998 (99) 436-46-15"
          carConfort="convenient"
          orderedTime="04.12.2021 20:30	"
          startLocation="1 Kuyi Talarik ko'chasi, Тошкент 100091, Oʻzbekiston"
          finishLocation="1 Kuyi Talarik ko'chasi, Тошкент 100091, Oʻzbekiston"
          income="50 300 000 SUM"
        />
      </div>
      <div className="text-black flex justify-end items-center mt-5 gap-4">
        <strong>1-2 items</strong>
        <Toggle.Root className="w-10 h-10 border-[1px] border-[#EFF0F4] rounded p-3">
          <RiArrowLeftSLine className="fill-[#EFF0F4]" />
        </Toggle.Root>
        <Toggle.Root className="w-10 h-10 bg-blue-600 text-white rounded ">
          <span>1</span>
        </Toggle.Root>
        <Toggle.Root className="w-10 h-10 border-[1px] border-[#EFF0F4] rounded">
          <span>2</span>
        </Toggle.Root>
        <Toggle.Root className="w-10 h-10 border-[1px] border-[#EFF0F4] rounded p-3">
          <RiArrowRightSLine />
        </Toggle.Root>
      </div>
    </div>
  );
};

export default Dashboard;
