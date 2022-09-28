import * as Checkbox from "@radix-ui/react-checkbox";

import { RiCheckLine } from "react-icons/ri";

interface Props {
  image: any;
  name: string;
  phone: string;
  carConfort: string;
  orderedTime: string;
  startLocation: string;
  finishLocation: string;
  income: string;
}

const DashboardStat = (props: Props) => {
  return (
    <div className="grid grid-cols-7 font-poppins font-medium text-xs text-black py-2 items-center">
      <Checkbox.Root className="mx-auto w-6 h-6 bg-white border-2 rounded p-[2px]">
        <Checkbox.Indicator>
          <RiCheckLine className="w-4 h-4" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div className="flex items-center gap-3">
        <img src={props.image} />
        <div className="flex flex-col">
          <strong>{props.name}</strong>
          <span className="text-subtitle">{props.phone}</span>
        </div>
      </div>
      <strong className="mx-auto">{props.carConfort}</strong>
      <strong className="mx-auto">{props.orderedTime}</strong>
      <strong className="mx-auto">{props.startLocation}</strong>
      <strong className="mx-auto">{props.finishLocation}</strong>
      <strong className="mx-auto bg-bgGreen px-3 py-2 rounded-full text-[#24C18F]">
        {props.income}
      </strong>
    </div>
  );
};

export default DashboardStat;
