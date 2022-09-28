import * as Checkbox from "@radix-ui/react-checkbox";
import { RiCheckLine } from "react-icons/ri";

interface Props {
  name: string;
  price: string;
  active?: boolean;
}

const SelectClass = (props: Props) => {
  return (
    <div className="grid grid-cols-2 px-5 py-5 items-center">
      <div className="flex">
        {props.active ? (
          <Checkbox.Root
            checked
            className="w-6 h-6 p-[2px] mr-16 bg-white border-2 border-gray-300 rounded-full"
          >
            <Checkbox.Indicator>
              <RiCheckLine className="w-4 h-4 text-black" />
            </Checkbox.Indicator>
          </Checkbox.Root>
        ) : (
          <Checkbox.Root className="w-6 h-6 p-[2px] mr-16 bg-white border-2 border-gray-300 rounded-full">
            <Checkbox.Indicator>
              <RiCheckLine className="w-4 h-4 text-black" />
            </Checkbox.Indicator>
          </Checkbox.Root>
        )}

        <span>{props.name}</span>
      </div>
      <span
        className={`${
          props.active
            ? "bg-bgGreenActive text-white"
            : "bg-bgGreen text-bgGreenActive"
        } w-full pl-[30%] py-2 rounded-full`}
      >
        30 000 SUM
      </span>
    </div>
  );
};

export default SelectClass;
