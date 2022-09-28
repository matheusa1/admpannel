import { useState } from "react";
import TopDriversInfo from "../TopDriversInfo";

import HeadPhone from "../../assets/images/headphone.svg";
import Grammar from "../../assets/images/grammar.svg";
import Dictionary from "../../assets/images/dictionary.svg";
import Mic from "../../assets/images/mic.svg";

interface Props {
  picture: any;
  name: string;
  phone: string;
  orders: number;
  income: number;
}

const TopDrivers = ({ picture, name, phone, orders, income }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="bg-[#F7F9FC] px-6 py-4 min-w-[355px] w-full flex justify-between rounded-xl text-black items-center cursor-pointer"
      >
        <div className="flex items-center">
          <img src={picture} />
          <div className="flex flex-col ml-2 justify-center">
            <strong className="font-mont font-semibold text-base truncate">
              {name}
            </strong>
            <span className="font-mont font-normal text-subtitle text-xs truncate">
              {phone}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end">
          <span className="font-mont font-normal text-sm">
            Orders:
            <strong className="ml-2 font-mont font-medium text-xl">
              {orders}
            </strong>
          </span>
          <span className="font-mont font-normal text-sm">
            Income:
            <strong className="ml-2 font-mont font-medium text-xl">
              $ {income}
            </strong>
          </span>
        </div>
      </div>
      {open && (
        <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-8">
          <TopDriversInfo
            image={HeadPhone}
            title="15% Listening"
            subtitle="Speak 20 minutes."
          />
          <TopDriversInfo
            image={Grammar}
            title="32% Grammar"
            subtitle="Learn 5 new rules"
          />
          <TopDriversInfo
            image={Mic}
            title="21% pronunciation"
            subtitle="Read 30 minutes"
          />
          <TopDriversInfo
            image={Dictionary}
            title="64% dictionary"
            subtitle="Learn 5 new words"
          />
        </div>
      )}
    </div>
  );
};

export default TopDrivers;
