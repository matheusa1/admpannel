import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";

import * as Checkbox from "@radix-ui/react-checkbox";
import { RiCheckLine } from "react-icons/ri";

interface Props {
  name: string;
  phone: string;
  image: string;
  startingValue: number;
  freeKm: string;
  perKmValue: number;
  waitingTime: number;
  outOfBranch: number;
}

const CarClassesInfo = (props: Props) => {
  return (
    <div className="w-full px-3 py-4 flex items-center font-poppins font-medium text-sm">
      <div className="basis-1/12">
        <Checkbox.Root className="w-6 h-6 bg-white border-2 p-0.5 rounded">
          <Checkbox.Indicator>
            <RiCheckLine className="w-4 h-4 text-black" />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>

      <div className="basis-4/12 flex">
        <img src={props.image} />
        <div className="flex flex-col ml-5">
          <span className="text-sm">{props.name}</span>
          <span className="text-xs text-subtitle">{props.phone}</span>
        </div>
      </div>

      <span className="basis-3/12 flex justify-center">
        {props.startingValue}
      </span>
      <span className="basis-3/12 flex justify-center">{props.freeKm}</span>
      <span className="basis-3/12 flex justify-center">{props.perKmValue}</span>
      <span className="basis-3/12 flex justify-center">
        {props.waitingTime}
      </span>
      <span className="basis-3/12 flex justify-center">
        {props.outOfBranch}
      </span>
      <div className="basis-1/12 flex justify-end" >
        <HiOutlinePencilAlt className="w-6 h-6 text-blue-500 mr-5" />
        <HiOutlineTrash className="w-6 h-6 text-blue-500" />
      </div>
    </div>
  );
};

export default CarClassesInfo;
