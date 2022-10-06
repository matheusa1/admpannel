import * as Checkbox from "@radix-ui/react-checkbox";
import * as Select from "@radix-ui/react-select";
import * as Toggle from "@radix-ui/react-toggle";

import { CgSearch } from "react-icons/cg";
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCheckLine,
} from "react-icons/ri";
import { TbAccessPoint } from "react-icons/tb";
import DriverInfo from "../../components/DriverInfo";

import * as Data from "../../data/template.json";

const Drivers = () => (
  <div className="flex flex-col gap-5">
    <footer className="flex items-center mt-5 justify-between">
      <div className="flex items-center gap-10">
        <strong className="font-mont font-extrabold text-2xl">
          Drivers list
        </strong>
        <div className="flex relative">
          <input
            className="shadow-md border-[1px] border-light-gray p-5 rounded-full"
            placeholder="Search by Name"
          />
          <CgSearch className="w-5 h-5 absolute top-6 right-6" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <TbAccessPoint className="text-blue-500 w-10 h-10" />
        <Select.Root>
          <Select.Trigger className="flex items-center gap-5 px-7 py-4 border-[1px] border-light-gray rounded-full shadow-lg">
            <Select.Value placeholder="All Drivers" />
            <Select.Icon>
              <RiArrowDownSLine />
            </Select.Icon>
          </Select.Trigger>
          <Select.Content className="w-40 bg-white rounded-md border-[1px] border-light-gray shadow-lg overflow-hidden relative">
            <Select.Viewport className="flex flex-col p-3 gap-3">
              <Select.Item
                value="allDrivers"
                className="pointer hover:bg-slate-100 rounded-full w-full flex justify-center"
              >
                <Select.ItemText>All Drivers</Select.ItemText>
              </Select.Item>
              <Select.Item
                value="activeDrivers"
                className="pointer hover:bg-slate-100 rounded-full w-full flex justify-center"
              >
                <Select.ItemText>Active Drivers</Select.ItemText>
              </Select.Item>
              <Select.Item
                value="inactiveDrivers"
                className="pointer hover:bg-slate-100 rounded-full w-full flex justify-center"
              >
                <Select.ItemText>Inactive Drivers</Select.ItemText>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Root>
      </div>
    </footer>

    <main className="flex flex-col w-full">
      <div className="bg-light-gray py-5 px-2 rounded-lg flex font-mont font-semibold">
        <div className="basis-1/12">
          <Checkbox.Root className="w-6 h-6 bg-white border-2 rounded p-[2px] mx-auto">
            <Checkbox.Indicator>
              <RiCheckLine />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
        <span className="basis-3/12 flex justify-center">First Name</span>
        <span className="basis-3/12 flex justify-center">Last Name</span>
        <span className="basis-3/12 flex justify-center">Birth Date</span>
        <span className="basis-3/12 flex justify-center">State</span>
        <span className="basis-3/12 flex justify-center">Home Location</span>
        <span className="basis-3/12 flex justify-center">Work Location</span>
      </div>
      {Data.data1.map((driver, index) => {
        const firstName = driver.name.split(" ")[0];
        const lastName = driver.name.split(" ")[1];
        return (
          <div key={index}>
            <DriverInfo
              firstName={firstName}
              lastName={lastName}
              birthDate={driver.birthDate}
              phone={driver.phone}
              state={driver.state}
              timeWorking={driver.timeWorking}
            />
          </div>
        );
      })}
    </main>

    <footer className="flex items-center justify-between pt-7 border-t-[1px] border-t-light-gray">
      <div className="flex gap-10">
        <h1 className="font-poppins font-medium text-base">Total Users: 98</h1>
        <h1 className="font-poppins font-medium text-base">
          Active Drivers: 9
        </h1>
      </div>
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

export default Drivers;
