import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="px-4 py-4">
      <Outlet />
    </div>
  );
};

export default Main;
