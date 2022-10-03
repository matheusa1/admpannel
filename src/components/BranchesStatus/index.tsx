interface Props {
  id: number;
  name: string;
  freeKm: string;
}

const BranchesStatus = (props: Props) => {
  return (
    <div className="font-poppins font-medium text-xs flex flex-row py-6 px-5">
      <div className="basis-1/12">
        <span>{props.id}</span>
      </div>
      <div className="basis-5/12">
        <span>{props.name}</span>
      </div>
      <div className="basis-6/12">
        <span>{props.freeKm}</span>
      </div>
    </div>
  );
};

export default BranchesStatus;
