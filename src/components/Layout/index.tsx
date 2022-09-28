import Header from "../Header";
import MenuBar from "../MenuBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="my-5 mr-5 flex">
      <MenuBar />
      <div className="bg-white w-full min-h-[880px] rounded-[30px] py-5 px-10 flex flex-col flex-nowrap overflow-hidden">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
