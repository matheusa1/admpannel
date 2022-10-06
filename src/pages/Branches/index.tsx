import * as Toggle from "@radix-ui/react-toggle";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiSearch2Line,
} from "react-icons/ri";
import BranchesStatus from "../../components/BranchesStatus";
import ButtonOutlined from "../../components/ButtonOutlined";

const Branches = () => {
  return (
    <div>
      <header className="flex justify-between mt-3">
        <div className="flex items-center gap-4">
          <h1 className="font-mont font-extrabold text-xl">Branches list</h1>
          <div className="flex relative">
            <input
              className="py-4 pl-5 pr-9 w-60 border-[1px] rounded-full border-light-gray text-subtitle font-sans font-semibold text-sm"
              type="text"
              placeholder="Search By Name"
            />
            <RiSearch2Line className="absolute top-4 right-6 w-6 h-6 fill-subtitle" />
          </div>
        </div>
        <ButtonOutlined name="Add New Branches" />
      </header>

      <main className="pt-4">
        <div className="font-mont font-semibold text-xs flex flex-row py-4 px-5 bg-gridHead rounded-xl">
          <div className="basis-1/12">
            <span>Nº</span>
          </div>
          <div className="basis-5/12">
            <span>Branches Name</span>
          </div>
          <div className="basis-6/12">
            <span>Free km</span>
          </div>
        </div>
        <div>
          <BranchesStatus
            id={1}
            name="Magic City Park"
            freeKm="пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston"
          />
          <BranchesStatus
            id={2}
            name="Funlandia"
            freeKm="пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston"
          />
          <BranchesStatus
            id={3}
            name="Toshkent Xalqaro Aeroporti"
            freeKm="13 Kumarik ko'chasi, Tashkent 100167, Oʻzbekiston"
          />
          <BranchesStatus
            id={4}
            name="Сергели тумани ҳокимияти"
            freeKm="1 Anna Axmatova ko'chasi, Тошкент 100085, Oʻzbekiston"
          />
          <BranchesStatus
            id={5}
            name="Otdel Statistiki Yakkasarayskogo Rayona"
            freeKm="Askiya ko'chasi, Тошкент, Oʻzbekiston"
          />
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

export default Branches;
