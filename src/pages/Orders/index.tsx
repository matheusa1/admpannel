import * as Checkbox from "@radix-ui/react-checkbox";
import { RiCheckLine } from "react-icons/ri";

import Map from "../../assets/images/map.svg";
import SelectClass from "../../components/SelectClass";

const Orders = () => {
  return (
    <div className="flex flex-col text-black">
      <header className="font-mont font-extrabold text-xl mt-6 mb-6">
        Knowledge base
      </header>
      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        <img src={Map} className="col-span-3 w-full rounded-xl" />

        <div className="col-span-2 p-6 flex flex-col shadow-xl rounded-xl border-[1px] border-[#F2ECFF]">
          <div className="w-full gap-5 flex mb-4">
            <div className="flex flex-col w-full">  
              <label htmlFor="number" className="mb-2 font-sans text-sm font-semibold ">
                Phone number:
              </label>
              <input
                id="number"
                type="text"
                className="p-3 w-full border-[1px] border-[#E4E6EE] rounded-xl"
                placeholder="+998 (--) --- -- --"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="payment" className="mb-2 font-sans text-sm font-semibold">
                Payment:
              </label>
              <input
                id="payment"
                type="text"
                className="p-3 w-full border-[1px] border-[#E4E6EE] rounded-xl"
                placeholder="Cash"
              />
            </div>
          </div>

          <div className="mb-4">
            <Checkbox.Root className="w-6 h-6 border-2 border-blue-600 p-0.5 rounded">
              <Checkbox.Indicator>
                <RiCheckLine className="w-4 h-4 text-black" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <span className="ml-2">
              I agree to the{" "}
              <a className="text-blue-600">terms of the contract</a>
            </span>
          </div>

          <div className="flex flex-col h-full">
            <label htmlFor="textarea" className="mb-2 font-sans text-sm font-semibold">Comment:</label>
            <textarea className="p-3 w-full h-full border-[1px] border-[#E4E6EE] rounded-xl" id="textarea" placeholder="You can leave your opinion"></textarea>
          </div>
        </div>


        <div className="shadow-xl rounded-xl">
          <div className="grid grid-cols-2 bg-[#EFF0F4] rounded-t-xl h-10 items-center font-mont font-semibold text-sm border-[1px] border-[#EFF0F4]">
            <span className="mx-auto">Class</span>
            <span className="mx-auto">Price</span>
          </div>
          <div>
            <SelectClass name="Start" price="30 000 SUM" active />
            <SelectClass name="Comfort" price="30 000 SUM" />
            <SelectClass name="Standard" price="30 000 SUM" />
            <SelectClass name="Labo" price="30 000 SUM" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
