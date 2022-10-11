import * as Checkbox from "@radix-ui/react-checkbox";
import * as Toggle from "@radix-ui/react-toggle";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCheckLine,
} from "react-icons/ri";
import RidersInfo from "../../components/RidersInfo";

import data from "../../data/template.json";

const Riders = () => {
  const drivers = data.data1;

  return (
    <div className="flex flex-col gap-7">
      <main>
        <div className="flex bg-light-gray py-4 rounded-xl font-mont font-semibold">
          <div className="basis-1/12 flex justify-center">
            <Checkbox.Root className="w-6 h-6 bg-white border-2 p-0.5 rounded">
              <Checkbox.Indicator>
                <RiCheckLine className="w-4 h-4 text-black" />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>
          <span className="basis-3/12 flex">User</span>
          <span className="basis-3/12 flex justify-center">Car Comfort</span>
          <span className="basis-3/12 flex justify-center">Ordered Time</span>
          <span className="basis-3/12 flex justify-center">Start Location</span>
          <span className="basis-3/12 flex justify-center">
            Finish Location
          </span>
          <span className="basis-3/12 flex justify-center">Income</span>
        </div>

        {drivers.map((info, index) => {
          return (
            <div>
              <RidersInfo
                name={info.name}
                carComfort={info.carComfort}
                finishLocation={info.finishLocation}
                image={info.image}
                phone={info.phone}
                orderedTime={info.orderedTime}
                income={info.income}
                startLocation={info.startLocation}
              />
            </div>
          );
        })}
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

export default Riders;
