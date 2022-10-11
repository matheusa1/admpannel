import * as Checkbox from "@radix-ui/react-checkbox";

import { RiCheckLine } from "react-icons/ri";

interface Props {
  image: string;
  name: string;
  phone: string;
  carComfort: string;
  orderedTime: string;
  startLocation: string;
  finishLocation: string;
  income: string;
}

const RidersInfo = (props: Props) => {
  const date = props.orderedTime.split(" ")[0];
  const hour = props.orderedTime.split(" ")[1];

  return (
    <div className="flex py-5 items-center font-poppins font-medium">
      <div className="basis-1/12 flex justify-center">
        <Checkbox.Root className="w-6 h-6 bg-white border-2 p-0.5 rounded">
          <Checkbox.Indicator>
            <RiCheckLine className="w-4 h-4 text-black" />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <div className="basis-3/12 flex gap-4 ">
        <img src={props.image} />
        <div className="flex flex-col">
          <span className="text-sm">{props.name}</span>
          <span className="text-xs text-subtitle">{props.phone}</span>
        </div>
      </div>

      <span className="basis-3/12 flex justify-center">{props.carComfort}</span>
      <div className="basis-3/12 flex flex-col items-center">
        <span>{date}</span>
        <span>{hour}</span>
      </div>
      <span className="basis-3/12 flex justify-center">
        {props.startLocation}
      </span>
      <span className="basis-3/12 flex justify-center">
        {props.finishLocation}
      </span>
      <div className="basis-3/12 flex justify-center bg-bgGreen text-bgGreenActive rounded-full py-2">
        {props.income}
      </div>
    </div>
  );
};

export default RidersInfo;
