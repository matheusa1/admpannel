import { FormEvent } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineTrash, HiPencilAlt, HiX } from "react-icons/hi";

import Avatar from "../../assets/images/AvatarAddPhoto.svg";

interface Props {
  image: string;
  name: string;
  phone: string;
  totalRides: number;
  totalFinished: number;
  homeLocation: string;
  workLocation: string;
}

const ClientesInfo = (props: Props) => {
  const onHandleClick = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  const firstName = props.name.split(" ")[0];
  const lastName = props.name.split(" ")[1];

  return (
    <div className="flex py-5 items-center font-poppins font-medium">
      <AiOutlineMessage className="basis-1/12 w-5 h-5" />
      <div className="basis-3/12 flex gap-4 ">
        <img src={props.image} />
        <div className="flex flex-col">
          <span className="text-sm">{props.name}</span>
          <span className="text-xs text-subtitle">{props.phone}</span>
        </div>
      </div>

      <span className="basis-3/12 flex justify-center">{props.totalRides}</span>
      <span className="basis-3/12 flex justify-center">
        {props.totalFinished}
      </span>
      <span className="basis-3/12 flex justify-center">
        {props.homeLocation}
      </span>
      <span className="basis-3/12 flex justify-center">
        {props.workLocation}
      </span>
      <div className="basis-1/12 flex justify-center gap-4 text-blue-500">
        <Dialog.Root>
          <Dialog.DialogTrigger>
            <button>
              <HiPencilAlt className="w-5 h-5" />
            </button>
          </Dialog.DialogTrigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 w-[600px] rounded-xl font-sans font-semibold ">
              <div className="flex justify-between">
                <span>Client Information</span>
                <Dialog.Close type="button">
                  <HiX className="w-5 h-5" />
                </Dialog.Close>
              </div>
              <form
                onSubmit={onHandleClick}
                className="w-full flex flex-col gap-4"
              >
                <div className="flex justify-center">
                  <img src={Avatar} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="p-3 border-[1px] border-light-gray rounded placeholder:font-medium placeholder:text-gray-400"
                    placeholder={firstName}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="p-3 border-[1px] border-light-gray rounded placeholder:font-medium placeholder:text-gray-400"
                    placeholder={lastName}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="date">Date:</label>
                  <div className="w-full border-[1px] border-light-gray rounded p-3 flex justify-evenly">
                    <input
                      name="startDate"
                      type="date"
                      placeholder="Start Date"
                    />
                    <span>~</span>
                    <input name="endDate" type="date" placeholder="End Date" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-3 bg-blue-500 text-white rounded"
                  >
                    Add New Teacher
                  </button>
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <HiOutlineTrash className="w-5 h-5" />
      </div>
    </div>
  );
};

export default ClientesInfo;
