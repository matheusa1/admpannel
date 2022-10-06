import * as Checkbox from "@radix-ui/react-checkbox";
import { RiCheckLine } from "react-icons/ri";

interface Props {
  firstName: string;
  lastName: string;
  birthDate: string;
  state: string;
  phone: string;
  timeWorking: string;
}

const DriverInfo = (props: Props) => {
  return (
    <div className="flex px-2 py-4 font-poppins font-medium text-sm items-center">
      <div className="basis-1/12">
        <Checkbox.Root className="w-6 h-6 bg-white border-2 rounded p-[2px] mx-auto">
          <Checkbox.Indicator>
            <RiCheckLine />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <span className="basis-3/12 flex justify-center">{props.firstName}</span>
      <span className="basis-3/12 flex justify-center">{props.lastName}</span>
      <span className="basis-3/12 flex justify-center">{props.birthDate}</span>
      <span className="basis-3/12 flex justify-center">{props.state}</span>
      <span className="basis-3/12 flex justify-center text-subtitle">
        {props.phone}
      </span>
      <div
        className={`basis-3/12 flex justify-center rounded-full ${
          props.timeWorking.includes("Some")
            ? "bg-blue-300 text-blue-700"
            : "bg-red-300 text-red-700"
        }`}
      >
        <span>{props.timeWorking}</span>
      </div>
    </div>
  );
};

export default DriverInfo;
