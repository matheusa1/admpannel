import { FormEvent } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as Toggle from "@radix-ui/react-toggle";
import * as Dialog from "@radix-ui/react-dialog";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCheckLine,
} from "react-icons/ri";
import { HiX } from "react-icons/hi";
import Avatar from "../../assets/images/AvatarAddPhoto.svg";

import CarClassesInfo from "../../components/CarClassesInfo";

import * as data from "../../data/template.json";

const CarClasses = () => {
  const onHandleClick = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (
    <div>
      <header className="flex justify-between items-center my-5">
        <h1 className="font-mont font-extrabold text-xl">Car classes list</h1>
        <Dialog.Root>
          <Dialog.Trigger className="text-blue-500 text-xs font-medium px-5 py-2 border-2 border-blue-500 rounded-md">
            Add car classes
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
            <Dialog.Content className="fixed bg-white rounded-xl p-5 w-[550px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-semibold text-sm">
              <header>
                <div className="flex justify-between">
                  <span>Clients information</span>
                  <Dialog.Close type="button">
                    <HiX className="w-5 h-5" />
                  </Dialog.Close>
                </div>
                <div className="mt-2 mb-2 flex justify-center">
                  <img src={Avatar} />
                </div>
              </header>

              <main>
                <form onSubmit={onHandleClick} className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label className="mb-2" htmlFor="name">
                      Name:
                    </label>
                    <input
                      className="px-4 py-2 border-[1px] border-light-gray rounded"
                      id="name"
                      name="name"
                      placeholder="Spark"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-2 items-center">
                      <Checkbox.Root
                        id="lightning"
                        name="lightning"
                        className="w-6 h-6 border-2 rounded flex justify-center items-center"
                      >
                        <Checkbox.Indicator>
                          <RiCheckLine className="w-4 h-4 text-blue-500" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <label htmlFor="lightning">Lightning ⚡️</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Checkbox.Root
                        id="delivery"
                        name="delivery"
                        className="w-6 h-6 border-2 rounded flex justify-center items-center"
                      >
                        <Checkbox.Indicator>
                          <RiCheckLine className="w-4 h-4 text-blue-500" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <label htmlFor="delivery">Delivery</label>
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2" htmlFor="startingValue">
                        Starting Value
                      </label>
                      <input
                        className="px-4 py-2 border-[1px] border-light-gray rounded"
                        id="startingValue"
                        name="startingValue"
                        placeholder="3000"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2" htmlFor="freeKm">
                        Free Km
                      </label>
                      <input
                        className="px-4 py-2 border-[1px] border-light-gray rounded"
                        id="freeKm"
                        name="freeKm"
                        placeholder="0"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2" htmlFor="perKmValue">
                        Per Km Value
                      </label>
                      <input
                        className="px-4 py-2 border-[1px] border-light-gray rounded"
                        id="perKmValue"
                        name="perKmValue"
                        placeholder="1200"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2" htmlFor="perMinuteValue">
                        Per Minute Value
                      </label>
                      <input
                        className="px-4 py-2 border-[1px] border-light-gray rounded"
                        id="perMinuteValue"
                        name="perMinuteValue"
                        placeholder="300"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2" htmlFor="waitingTime">
                        Waiting Time
                      </label>
                      <input
                        className="px-4 py-2 border-[1px] border-light-gray rounded"
                        id="waitingTime"
                        name="waitingTime"
                        placeholder="1200"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2" htmlFor="outOfBranch">
                        Out of Branch
                      </label>
                      <input
                        className="px-4 py-2 border-[1px] border-light-gray rounded"
                        id="outOfBranch"
                        name="outOfBranch"
                        placeholder="300"
                      />
                    </div>
                  </div>

                  <header className="flex justify-end mt-4">
                    <button
                      className="px-4 py-3 text-white bg-blue-500 rounded"
                      type="submit"
                    >
                      Add New Teacher
                    </button>
                  </header>
                </form>
              </main>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </header>

      <main>
        <div className="w-full rounded-xl px-3 py-4 bg-gridHead flex items-center font-mont font-semibold text-sm">
          <div className="basis-1/12">
            <Checkbox.Root className="w-6 h-6 bg-white border-2 p-0.5 rounded">
              <Checkbox.Indicator>
                <RiCheckLine className="w-4 h-4 text-black" />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>

          <span className="basis-4/12">User</span>
          <span className="basis-3/12 flex justify-center">Starting Value</span>
          <span className="basis-3/12 flex justify-center">Free km</span>
          <span className="basis-3/12 flex justify-center">Per Km Value</span>
          <span className="basis-3/12 flex justify-center">Waiting Time</span>
          <span className="basis-3/12 flex justify-center">Out of Branch</span>
          <div className="basis-1/12" />
        </div>
        <div>
          {data.data1.map((item, index) => {
            return (
              <div key={index}>
                <CarClassesInfo
                  name={item.name}
                  image={item.image}
                  freeKm={item.freeKm}
                  outOfBranch={item.outOfBranch}
                  phone={item.phone}
                  perKmValue={item.perKmValue}
                  startingValue={item.startingValue}
                  waitingTime={item.waitingTime}
                />
              </div>
            );
          })}
        </div>
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

export default CarClasses;
