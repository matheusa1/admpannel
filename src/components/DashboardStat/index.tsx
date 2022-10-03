import * as Checkbox from "@radix-ui/react-checkbox";

import { RiCheckLine } from "react-icons/ri";

interface Props {
  image: any;
  name: string;
  phone: string;
  carComfort: string;
  orderedTime: string;
  startLocation: string;
  finishLocation: string;
  income: string;
  active?: boolean;
}

const DashboardStat = (props: Props) => {
  return (
    <div className="flex font-poppins font-medium text-xs">
      <div className="basis-1/12 flex justify-center items-center">
        {props.active ? (
          <Checkbox.Root checked className="w-6 h-6 border-[1px] rounded p-1">
            <Checkbox.Indicator>
              <RiCheckLine />
            </Checkbox.Indicator>
          </Checkbox.Root>
        ) : (
          <Checkbox.Root className="w-6 h-6 border-[1px] rounded p-1">
            <Checkbox.Indicator>
              <RiCheckLine />
            </Checkbox.Indicator>
          </Checkbox.Root>
        )}
      </div>

      <div className="basis-3/12 flex items-center">
        <img src={props.image} className="w-12 h-12 mr-4" />
        <div className="flex flex-col gap-1">
          <h1 className="text-sm">{props.name}</h1>
          <span className="text-subtitle">{props.phone}</span>
        </div>
      </div>

      <strong className="basis-3/12 flex justify-center items-center">
        {props.carComfort}
      </strong>
      <strong className="basis-3/12 flex justify-center items-center">
        {props.orderedTime}
      </strong>
      <strong className="basis-3/12 flex justify-center items-center">
        {props.startLocation}
      </strong>
      <strong className="basis-3/12 flex justify-center items-center">
        {props.finishLocation}
      </strong>
      <strong className="basis-3/12 flex justify-center items-center bg-bgGreen text-bgGreenActive rounded-full">
        {props.income}
      </strong>
    </div>
  );
};

export default DashboardStat;
