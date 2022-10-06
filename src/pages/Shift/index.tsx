import * as Toggle from "@radix-ui/react-toggle";
import * as Dialog from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";

import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { HiOutlinePencilAlt, HiOutlineTrash, HiX } from "react-icons/hi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import * as data from "../../data/template.json";

const Shift = () => {
  const [isMenu, setIsMenu] = useState(true);

  function handleClick(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);
  }

  return (
    <div>
      {isMenu ? (
        <header className="grid grid-cols-3 gap-4">
          <button className="py-3 px-8 rounded border-[1px] border-blue-300 text-blue-500 text-sm font-medium">
            Management
          </button>
          <button
            onClick={() => setIsMenu(false)}
            className="py-3 px-8 rounded border-[1px] border-red-300 text-red-500 text-sm font-medium"
          >
            Shift close
          </button>
          <Dialog.Root>
            <Dialog.Trigger>
              <button className="w-full py-3 px-8 rounded border-[1px] border-blue-300 text-blue-500 text-sm font-medium">
                History
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
              <Dialog.Content className="fixed bg-white rounded-xl w-[550px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <form
                  onSubmit={handleClick}
                  className="font-sans font-semibold p-5"
                >
                  <header className="flex justify-between pb-5 border-b-[1px] border-b-light-gray">
                    <span className="text-base">Clients Information</span>
                    <Dialog.Close type="button">
                      <HiX className="w-5 h-5" />
                    </Dialog.Close>
                  </header>
                  <div className="mt-4 flex flex-col gap-2">
                    <label className="text-sm" htmlFor="expectedValue">
                      Expected Value:
                    </label>
                    <input
                      className="placeholder:font-medium p-3 rounded border-[1px] border-light-gray"
                      id="expectedValue"
                      name="expectedValue"
                      placeholder="0"
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <label className="text-sm" htmlFor="actualValue">
                      Actual Value:
                    </label>
                    <input
                      className="placeholder:font-medium p-3 rounded border-[1px] border-light-gray"
                      id="actualValue"
                      name="actualValue"
                      placeholder="0"
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <label className="text-sm" htmlFor="difference">
                      Difference:
                    </label>
                    <input
                      className="placeholder:font-medium p-3 rounded border-[1px] border-light-gray"
                      id="difference"
                      name="difference"
                      placeholder="0"
                    />
                  </div>

                  <footer className="mt-4 flex justify-end mb-2">
                    <button
                      type="submit"
                      className="p-3 bg-blue-600 text-white font-medium rounded "
                    >
                      Add New Teacher
                    </button>
                  </footer>
                </form>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </header>
      ) : (
        <header>
          <div className="flex justify-between mt-4 mb-8">
            <h1 className="font-mont font-extrabold text-xl">Shift Report</h1>
            <div className="flex gap-4">
              <div className="flex items-center">
                <span className="font-mont font-medium text-2xl">0</span>
                <FiArrowDownLeft className="w-7 h-7 text-blue-500" />
              </div>
              <div className="flex items-center">
                <span className="font-mont font-medium text-2xl">0</span>
                <FiArrowUpRight className="w-7 h-7 text-red-500" />
              </div>
            </div>
          </div>
          <form
            onSubmit={handleClick}
            className="flex flex-col gap-3 p-6 font-sans font-semibold text-sm border-[1px] border-light-gray shadow-lg rounded-xl placeholder:font-medium placeholder:text-xs"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="fn1">First Name</label>
                <input
                  id="fn1"
                  name="fn1"
                  className="p-3 border-2 border-light-gray rounded w-full"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="fn2">First Name</label>
                <input
                  id="fn2"
                  name="fn2"
                  className="p-3 border-2 border-light-gray rounded w-full"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="fn3">First Name</label>
              <textarea
                id="fn3"
                name="fn3"
                className="border-[1px] border-light-gray rounded-xl h-24 p-3"
                placeholder="First Name"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="p-3 border-2 border-blue-300 text-blue-500 rounded-xl w-full"
                onClick={() => setIsMenu(true)}
              >
                Pay In
              </button>
              <button
                type="submit"
                className="p-3 border-2 border-red-300 text-red-500 rounded-xl w-full"
                onClick={() => setIsMenu(true)}
              >
                Pay Out
              </button>
            </div>
          </form>
        </header>
      )}

      <main className="pt-6">
        <div className="flex p-6 bg-gridHead rounded font-mont font-medium text-sm">
          <span className="basis-1/12">Nº</span>
          <span className="basis-5/12">Branch Name</span>
          <span className="basis-6/12">Free Km</span>
        </div>

        {data.branches.map((branch, index) => {
          return (
            <div
              className="flex p-6 font-poppins font-medium text-xs"
              key={index}
            >
              <span className="basis-1/12">{branch.id}</span>
              <span className="basis-5/12">{branch.branchName}</span>
              <span className="basis-6/12">{branch.freeKm}</span>
              <div className="basis-1/12 flex justify-end">
                <HiOutlinePencilAlt className="w-5 h-5 text-blue-500 mr-5" />
                <HiOutlineTrash className="w-5 h-5 text-blue-500" />
              </div>
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

export default Shift;
