/* eslint-disable react/prop-types */
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="sm:grid sm:grid-cols-12 gap-3 bg-white h-screen w-screen ">
      <Sidebar />
      <div className="flex flex-col col-span-10 overflow-scroll scrollbar-hide">
        {/* <div className="scrollbar-hide pr-2 py-6 min-w-[680px] h-screen overflow-x-scroll"> */}
        <div className="scrollbar-hide pr-2 py-6 min-w-[680px] overflow-x-scroll h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
