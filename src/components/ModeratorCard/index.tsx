import { RiUser3Fill } from "react-icons/ri";

interface Props {
  name: string;
}

const ModeratorCard = ({name}: Props) => {
  return (
    <div className="w-[180px] h-[190px] shadow-md rounded-2xl">
      <div className="flex flex-col items-center justify-center h-full">
        <RiUser3Fill className="h-28 w-28 mb-7" />
        <span className="font-sans font-medium text-sm">{name}</span>
      </div>
    </div>
  );
};

export default ModeratorCard;
