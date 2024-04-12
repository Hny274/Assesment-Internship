import MainContent from "./Admin/MainContent";
import Sidebar from "./Admin/Sidebar";

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Admin;
