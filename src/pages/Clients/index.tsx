import * as Toggle from "@radix-ui/react-toggle";

import { CgSearch } from "react-icons/cg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import ClientesInfo from "../../components/ClientesInfo";

import * as Data from "../../data/template.json";

const Clients = () => {
  return (
    <div className="flex flex-col">
      <header className="my-4 flex items-center gap-6">
        <strong className="font-mont font-extrabold text-2xl">
          Drivers list
        </strong>
        <div className="flex relative">
          <input
            className="shadow-md border-[1px] border-light-gray p-5 rounded-full"
            placeholder="Search by Name"
          />
          <CgSearch className="w-5 h-5 absolute top-6 right-6" />
        </div>
      </header>

      <main className="flex flex-col">
        <div className="flex bg-light-gray py-4 rounded-xl font-mont font-semibold">
          <div className="basis-1/12"></div>
          <span className="basis-3/12 flex justify-center">User</span>
          <span className="basis-3/12 flex justify-center">Total Rides</span>
          <span className="basis-3/12 flex justify-center">Total Finished</span>
          <span className="basis-3/12 flex justify-center">Home Location</span>
          <span className="basis-3/12 flex justify-center">Work Location</span>
          <div className="basis-1/12"></div>
        </div>

        {Data.data1.map((client, index) => {
          return (
            <div key={index}>
              <ClientesInfo
                image={client.image}
                name={client.name}
                phone={client.phone}
                homeLocation={client.startLocation}
                totalFinished={client.totalFinished}
                totalRides={client.totalRides}
                workLocation={client.finishLocation}
              />
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

export default Clients;
