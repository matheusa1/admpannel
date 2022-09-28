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
    <NavLink
      to={`/${page}`}
      className={`${
        active ? "bg-white" : "hover:bg-black"
      } py-3 px-3 gap-5 flex items-center h-12 ${
        visibility !== "" ? "justify-center rounded-[30px]" : "rounded-l-[30px]"
      } `}
    >
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
  );
};

export default MenuItem;
