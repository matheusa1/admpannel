import { RiLogoutBoxLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b-2 pb-5 border-b-slate-50">
        {/* Left */}
        <div className="flex items-center">
          <h1 className="ml-10 text-black text-2xl font-normal font-mont mr-3">
            Good morning, Maharram 👋
          </h1>
          <span className="text-black font-mont font-normal text-xs">
            you have <a className="text-icon">1 new message</a>
          </span>
        </div>
        {/* Right */}
        <a href="/login">
          <RiLogoutBoxLine className="fill-black w-10 h-10  " />
        </a>
      </div>
  )
}

export default Header