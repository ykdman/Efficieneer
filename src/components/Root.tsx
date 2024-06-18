import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <MainNavigation />
      <main className="h-screen flex justify-center items-baseline fixed top-[96px] translate-x-[-50%] left-[50%] w-full">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
