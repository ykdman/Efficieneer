import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

const className =
  "h-full flex justify-center items-baseline fixed top-[96px] w-full md:h-max";

function Root() {
  return (
    <>
      <MainNavigation />
      <main className="flex justify-center items-baseline pt-[96px] w-full h-full md:h-auto overflow-auto">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
