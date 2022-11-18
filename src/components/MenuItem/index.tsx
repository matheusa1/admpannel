import { NavLink } from "react-router-dom";

interface Props {
  Icon: any;
  name: string;
  active?: boolean;
  page: string;
  visibility?: string;
}

const MenuItem = ({ Icon, name, active, page, visibility }: Props) => {
  return (
    <div className="relative">
      <NavLink
        to={`/${page}`}
        className={`${
          active ? "bg-white " : "hover:bg-black hover:rounded-full"
        } py-3 px-3 gap-5 flex items-center h-12 ${
          visibility !== ""
            ? "justify-center rounded-[30px]"
            : "rounded-l-[30px]"
        } `}
      >
        <div className={`${active ? "" : "hidden"} w-5 h-5 absolute bg-[#000000] -top-5 right-0 rounded-br-2xl before:w-5 before:h-5 before:bg-white before:content-[''] before:absolute before:top-0 before:right-0 before:-z-10`}></div>
        <div className={`${active ? "" : "hidden"} w-5 h-5 absolute bg-[#000000] -bottom-5 right-0 rounded-tr-2xl before:w-5 before:h-5 before:bg-white before:content-[''] before:absolute before:bottom-0 before:right-0 before:-z-10`}></div>
        <Icon
          className={`${active ? "text-icon" : "text-white"} ${
            visibility !== "" ? "w-6 h-6" : ""
          }`}
        />
        <span
          className={`${active ? "text-icon" : "text-white"} ${
            visibility ? visibility : ""
          }`}
        >
          {name}
        </span>
      </NavLink>
    </div>
  );
};

export default MenuItem;
