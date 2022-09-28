import ModeratorCard from "../../components/ModeratorCard";

const Moderators = () => {
  return (
    <div className="text-black font-sans">
      <header className="flex justify-between mt-6 mb-4">
        <h1 className="font-mont font-extrabold text-xl ">Moderator list</h1>
        <button className="text-blue-500 text-xs font-medium px-3 py-2 border-2 border-blue-500 rounded-md">
          Add New Moderator
        </button>
      </header>
      <div className="gap-8 flex flex-wrap">
        <ModeratorCard name="admin" />
        <ModeratorCard name="admin 1" />
        <ModeratorCard name="admin 2" />
        <ModeratorCard name="admin 2" />
        <ModeratorCard name="admin 2" />
        <ModeratorCard name="admin 2" />
        <ModeratorCard name="admin 2" />
        <ModeratorCard name="admin 2" />
        <ModeratorCard name="admin 2" />
        <ModeratorCard name="admin 2" />
      </div>
    </div>
  );
};

export default Moderators;
