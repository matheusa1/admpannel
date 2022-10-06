import { useState } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as Toggle from "@radix-ui/react-toggle";

import * as data from "../../data/template.json";

import Graphic from "../../assets/images/graphic.svg";
import photoDriver1 from "/driversPhotos/photoDriver1.svg";
import photoDriver2 from "/driversPhotos/photoDriver2.svg";
import photoDriver3 from "/driversPhotos/photoDriver3.svg";
import photoDriver4 from "/driversPhotos/photoDriver4.svg";
import photoDriver5 from "/driversPhotos/photoDriver5.svg";
import photoDriver6 from "/driversPhotos/photoDriver6.svg";

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
  const [checkAll, setCheckAll] = useState(false);

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
            {data.data2.map((item, index) => {
              return (
                <div key={index}>
                  <TopDrivers
                    picture={item.image}
                    name={item.name}
                    phone={item.phone}
                    income={item.income}
                    orders={item.orders}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Botside */}
      <div className="flex text-black bg-gridHead py-4 mb-4 rounded-lg">
        <div className="basis-1/12 flex justify-center">
          <Checkbox.Root
            className="w-6 h-6 bg-white border-2 rounded p-[2px] mx-auto"
            onCheckedChange={() => setCheckAll(!checkAll)}
          >
            <Checkbox.Indicator>
              <RiCheckLine />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
        <strong className="basis-3/12 ">User</strong>
        <strong className="basis-3/12 flex justify-center">Car Comfort</strong>
        <strong className="basis-3/12 flex justify-center">Ordered Time</strong>
        <strong className="basis-3/12 flex justify-center">
          Start Location
        </strong>
        <strong className="basis-3/12 flex justify-center">
          Finish Location
        </strong>
        <strong className="basis-3/12 flex justify-center">Income</strong>
      </div>
      <div className="flex flex-col gap-4 border-b-2 pb-8 full border-b-slate-50">
        {data.data1.map((item, index) => {
          return checkAll ? (
            <div key={index}>
              <DashboardStat
                active
                image={item.image}
                carComfort={item.carComfort}
                finishLocation={item.finishLocation}
                income={item.income}
                name={item.name}
                orderedTime={item.orderedTime}
                phone={item.phone}
                startLocation={item.startLocation}
              />
            </div>
          ) : (
            <div key={index}>
              <DashboardStat
                image={item.image}
                carComfort={item.carComfort}
                finishLocation={item.finishLocation}
                income={item.income}
                name={item.name}
                orderedTime={item.orderedTime}
                phone={item.phone}
                startLocation={item.startLocation}
              />
            </div>
          );
        })}
      </div>
      <div className="text-black flex justify-end items-center mt-5 gap-4">
        <strong>1-2 items</strong>
        <Toggle.Root className="w-10 h-10 border-[1px] border-light-gray rounded p-3">
          <RiArrowLeftSLine className="fill-light-gray" />
        </Toggle.Root>
        <Toggle.Root className="w-10 h-10 bg-blue-600 text-white rounded ">
          <span>1</span>
        </Toggle.Root>
        <Toggle.Root className="w-10 h-10 border-[1px] border-light-gray rounded">
          <span>2</span>
        </Toggle.Root>
        <Toggle.Root className="w-10 h-10 border-[1px] border-light-gray rounded p-3">
          <RiArrowRightSLine />
        </Toggle.Root>
      </div>
    </div>
  );
};

export default Dashboard;
