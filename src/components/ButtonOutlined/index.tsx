interface Props {
  name: string;
}

const ButtonOutlined = ({ name }: Props) => {
  return (
    <button className="text-blue-500 text-xs font-medium px-5 py-2 border-2 border-blue-500 rounded-md">
      {name}
    </button>
  );
};

export default ButtonOutlined;
