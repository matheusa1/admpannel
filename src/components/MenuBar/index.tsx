import { useLocation } from "react-router-dom";

import avatar from "../../assets/images/avatar.svg";
import {
  RiDashboardFill,
  RiBook2Fill,
  RiTimeFill,
  RiTeamFill,
  RiCarFill,
  RiMoneyDollarCircleFill,
  RiMapPin2Fill,
  RiListCheck,
  RiGitBranchFill,
  RiGroupFill,
  RiSettings4Fill,
  RiMenuFill,
} from "react-icons/ri";
import MenuItem from "../MenuItem";
import { useState } from "react";

const MenuBar = () => {
  const param = useLocation();

  const [isOpenMenu, setIsOpenMenu] = useState(
    window.screen.width <= 1200 ? false : true
  );  

  return (
    // Container
    <div
      className={`mt-[10px] ${
        isOpenMenu
          ? `min-w-[230px] `
          : `max-w-[100px] flex flex-col items-center`
      }`}
    >
      {/* ProfileInfo */}
      <div className={`ml-6 flex items-center mb-9`}>
        <img src={avatar} className={isOpenMenu ? "" : "mr-4"} />
        <div className={`${isOpenMenu ? "" : "hidden"} flex flex-col ml-2`}>
          <strong className={` font-poppins font-semibold text-lg `}>
            Samantha
          </strong>
          <span className="font-poppins font-normal text-xs text-subtitle truncate">
            +998 (99) 436-46-151
          </span>
        </div>
      </div>

      <div
        className={`absolute top-[47px] ${
          isOpenMenu ? "left-[278px]" : "left-[120px]"
        } text-black cursor-pointer`}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
      >
        <RiMenuFill className="w-6 h-6 fill-black" />
      </div>

      {/* Menu */}
      <div>
        <h1
          className={`ml-5 mb-4 font-mont font-bold text-xs text-subtitle ${
            isOpenMenu ? "" : "hidden"
          } `}
        >
          MAIN MENU
        </h1>
        <div className="ml-2">
          {param.pathname === `/` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page=""
              name={isOpenMenu ? "Dashboard" : ""}
              Icon={RiDashboardFill}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page=""
              name={isOpenMenu ? "Dashboard" : ""}
              Icon={RiDashboardFill}
            />
          )}

          {param.pathname === `/orders` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="orders"
              name={isOpenMenu ? "Orders" : ""}
              Icon={RiBook2Fill}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="orders"
              name={isOpenMenu ? "Orders" : ""}
              Icon={RiBook2Fill}
            />
          )}

          {param.pathname === `/riders` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="riders"
              name={isOpenMenu ? "Rides" : ""}
              Icon={RiTimeFill}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="riders"
              name={isOpenMenu ? "Rides" : ""}
              Icon={RiTimeFill}
            />
          )}

          {param.pathname === `/clients` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="clients"
              name={isOpenMenu ? "Clients" : ""}
              Icon={RiTeamFill}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="clients"
              name={isOpenMenu ? "Clients" : ""}
              Icon={RiTeamFill}
            />
          )}

          {param.pathname === `/drivers` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="drivers"
              name={isOpenMenu ? "Drivers" : ""}
              Icon={RiCarFill}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="drivers"
              name={isOpenMenu ? "Drivers" : ""}
              Icon={RiCarFill}
            />
          )}

          {param.pathname === `/shift` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="shift"
              name={isOpenMenu ? "Shift" : ""}
              Icon={RiMoneyDollarCircleFill}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="shift"
              name={isOpenMenu ? "Shift" : ""}
              Icon={RiMoneyDollarCircleFill}
            />
          )}

          {param.pathname === `/live-map` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="live-map"
              name={isOpenMenu ? "Live" : ""}
              Icon={RiMapPin2Fill}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="live-map"
              name={isOpenMenu ? "Live" : ""}
              Icon={RiMapPin2Fill}
            />
          )}

          {param.pathname === `/car-classes` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="car-classes"
              name={isOpenMenu ? "Car" : ""}
              Icon={RiListCheck}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="car-classes"
              name={isOpenMenu ? "Car" : ""}
              Icon={RiListCheck}
            />
          )}

          {param.pathname === `/branches` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="branches"
              name={isOpenMenu ? "Branches" : ""}
              Icon={RiGitBranchFill}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="branches"
              name={isOpenMenu ? "Branches" : ""}
              Icon={RiGitBranchFill}
            />
          )}

          {param.pathname === `/moderators` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="moderators"
              name={isOpenMenu ? "Moderators" : ""}
              Icon={RiGroupFill}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="moderators"
              name={isOpenMenu ? "Moderators" : ""}
              Icon={RiGroupFill}
            />
          )}

          {param.pathname === `/settings` ? (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="settings"
              name={isOpenMenu ? "Settings" : ""}
              Icon={RiSettings4Fill}
              active
            />
          ) : (
            <MenuItem
              visibility={isOpenMenu ? "" : "hidden"}
              page="settings"
              name={isOpenMenu ? "Settings" : ""}
              Icon={RiSettings4Fill}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
