import { useParams } from "react-router";

import * as Switch from "@radix-ui/react-switch";
import * as Toggle from "@radix-ui/react-toggle";

import { HiFolder, HiOutlinePencilAlt } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { ImArrowUpRight } from "react-icons/im";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import * as Data from "../../data/template.json";

import DriverInformationData from "../../components/DriverInformationData";

const DriverInformation = (props: any) => {
  const params = useParams();
  const { id } = params;

  const data = Data.data1.find((item: any) => item.id === id);

  return (
    <div className="flex flex-col mt-5">
      <footer className="flex justify-between items-center">
        <h1 className="font-mont font-extrabold text-xl">Driver Data</h1>
        <HiOutlinePencilAlt className="w-6 h-6 text-blue-500" />
      </footer>

      <main className="flex flex-col mt-6">
        <div className="flex p-4 shadow-lg rounded-lg">
          <div className="flex basis-5/12 w-full">
            <div>
              <div className="bg-light-gray p-10 rounded-lg">
                <FaUser className="fill-white w-10 h-10" />
              </div>
            </div>
            <div className="flex flex-col ml-14 w-full justify-between font-sans font-medium text-base">
              <div className="flex w-full justify-between">
                <span>Name:</span>
                <span className="text-subtitle">{data?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Birth Date:</span>
                <span className="text-subtitle">{data?.birthDate}</span>
              </div>
              <div className="flex justify-between">
                <span>Time Working:</span>
                <span className="text-subtitle">{data?.timeWorking}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <div className="flex items-center gap-2">
                  {data?.state == "Created" ? (
                    <Switch.Root
                      id="active"
                      defaultChecked
                      className=" border-[1px] border-light-gray w-12 h-6 bg-red-200 shadow-sm rounded-full px-0.5 justify-end flex"
                    >
                      <Switch.Thumb className="bg-red-500 w-5 h-5 z-10 block rounded-full" />
                    </Switch.Root>
                  ) : (
                    <Switch.Root
                      id="active"
                      className="border-[1px] border-light-gray w-12 h-6 bg-switchActive shadow-sm rounded-full px-0.5"
                    >
                      <Switch.Thumb className="bg-blue-500 w-5 h-5 z-10 block rounded-full" />
                    </Switch.Root>
                  )}
                  <label htmlFor="active" className="text-subtitle">
                    {data?.state}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] h-full rounded-full mx-10" />

          <div className="ml-15 basis-7/12 flex flex-col gap-3">
            <span>Comment:</span>
            <p className="text-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              temporibus officia natus accusamus molestias recusandae quasi sed
              architecto sunt omnis aut, quibusdam porro et dolorem
              consequuntur, error repellat blanditiis rerum.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-6 mt-8">
          <div className="px-4 py-6 bg-blue-200 flex rounded-xl gap-4 items-center">
            <HiFolder className="w-10 h-10 fill-blue-700" />
            <div className="flex flex-col overflow-hidden font-mont font-medium">
              <span className="truncate text-blue-700 text-base">
                Order Accept
              </span>
              <span className="text-xs">{data?.totalFinished}</span>
            </div>
          </div>
          <div className="px-4 py-6 bg-green-200 flex rounded-xl gap-4 items-center">
            <HiFolder className="w-10 h-10 fill-green-400" />
            <div className="flex flex-col overflow-hidden font-mont font-medium">
              <span className="truncate text-green-400 text-base">
                Order Cancel
              </span>
              <span className="text-xs">{data?.totalCanceled}</span>
            </div>
          </div>
          <div className="px-4 py-6 bg-orange-200 flex rounded-xl gap-4 items-center">
            <HiFolder className="w-10 h-10 fill-orange-400" />
            <div className="flex flex-col overflow-hidden font-mont font-medium">
              <span className="truncate text-orange-400 text-base">
                Order skip
              </span>
              <span className="text-xs">Order skip</span>
            </div>
          </div>
          <div className="px-4 py-6 bg-green-400 flex rounded-xl justify-between items-center">
            <div className="flex gap-4">
              <HiFolder className="w-10 h-10 fill-green-700" />
              <div className="flex flex-col overflow-hidden font-mont font-medium">
                <span className="truncate text-green-700 text-base">Rate</span>
                <span className="text-xs">Rate</span>
              </div>
            </div>
            <BsChevronRight />
          </div>
          <div className="px-4 py-6 bg-red-400 flex rounded-xl gap-4 items-center">
            <HiFolder className="w-10 h-10 fill-red-700" />
            <div className="flex flex-col overflow-hidden font-mont font-medium">
              <span className="truncate text-red-700 text-base">Cash</span>
              <span className="text-xs">Cash</span>
            </div>
          </div>
          <div className="px-4 py-6 bg-pink-200 flex rounded-xl justify-between items-center">
            <div className="flex gap-4">
              <HiFolder className="w-10 h-10 fill-pink-500" />
              <div className="flex flex-col overflow-hidden font-mont font-medium">
                <span className="truncate text-pink-500 text-base">Card</span>
                <span className="text-xs">Card</span>
              </div>
            </div>
            <BsChevronRight />
          </div>
        </div>

        <div className="flex flex-col mt-9">
          <div className="flex py-5 bg-light-gray font-mont font-semibold text-xs rounded-lg">
            <span className="basis-1/12 flex justify-center">Nº</span>
            <span className="basis-1/12 flex justify-center">Date</span>
            <span className="basis-6/12 flex justify-center">Comment</span>
            <span className="basis-2/12 flex justify-center">Value</span>
            <div className="basis-1/12 flex justify-center" />
          </div>
          <div>
            <DriverInformationData
              number={1}
              date="21.12.2021"
              comment="If you open it directly in the browser, you will see an empty page."
              value="50 000"
              arrow={
                <ImArrowUpRight className="fill-blue-700 rotate-180 w-4 h-4" />
              }
            />
            <DriverInformationData
              number={2}
              date="21.12.2021"
              comment="If you open it directly in the browser, you will see an empty page."
              value="100 000"
              arrow={<ImArrowUpRight className="fill-red-700 w-4 h-4" />}
            />
            <DriverInformationData
              number={3}
              date="21.12.2021"
              comment="If you open 
              it directly in the browser, you will see an empty page."
              value="24 000"
              arrow={
                <ImArrowUpRight className="fill-blue-700 rotate-180 w-4 h-4" />
              }
            />
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-between pt-7 border-t-[1px] border-t-light-gray">
        <h1 className="font-poppins font-medium text-base">Total Users: 98</h1>
        <div className="text-black flex items-center gap-4">
          <strong>1-2 of items</strong>
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
      </footer>
    </div>
  );
};

export default DriverInformation;
