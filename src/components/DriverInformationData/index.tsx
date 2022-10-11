interface Props {
  number: number;
  date: string;
  comment: string;
  value: string;
  arrow?: React.ReactNode;
}

const DriverInformationData = (props: Props) => {
  return (
    <div className="flex py-5 font-poppins font-medium text-xs">
      <span className="basis-1/12 flex justify-center">{props.number}</span>
      <span className="basis-1/12 flex justify-center">{props.date}</span>
      <span className="basis-6/12 flex justify-center">{props.comment}</span>
      <span className="basis-2/12 flex justify-center">{props.value}</span>
      <div className="basis-2/12 flex justify-end pr-5">{props.arrow}</div>
    </div>
  );
};

export default DriverInformationData;
