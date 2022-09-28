import { RiMore2Fill } from "react-icons/ri";

interface Props {
  image: string;
  title: string;
  subtitle: string;
}

const TopDriversInfo = ({ image, title, subtitle }: Props) => {
  return (
    <div className="text-black p-6 border-[1px] border-[#F0F0F0] rounded-xl">
      <div className="flex justify-between">
        <img src={image} className="w-12 h-12"/>
        <RiMore2Fill className="w-5 h-5"/>
      </div>
      <div className="flex flex-col font-mont mt-4">
        <strong className="text-sm font-medium" >{title}</strong>
        <span className="text-xs font-normal">{subtitle}</span>
      </div>
    </div>
  );
};

export default TopDriversInfo;
