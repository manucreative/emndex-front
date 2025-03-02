import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { Outlet } from "react-router";

const LayoutContent: React.FC = () => {
  
    return (
      <div className="min-h-screen xl:flex">
        <div
        className="flex-1 transition-all duration-300 ease-in-out">
          <AppHeader />
          <div className="">
          <Outlet />
          </div>
          <AppFooter />
          </div>
        </div>
    );
  };

  const AppMainLayout: React.FC = () => {
    return (
        <LayoutContent />
    );
  };
  
  export default AppMainLayout;