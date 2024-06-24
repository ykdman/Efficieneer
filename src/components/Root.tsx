import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

const className =
  "flex justify-center items-baseline pt-[96px] w-full h-full md:h-auto overflow-auto";

const mainClass =
  "grid place-items-center pt-[96px] w-full h-full md:h-auto overflow-auto";

function Root() {
  return (
    <>
      <MainNavigation />
      <main className="grid place-items-center pt-[96px] w-screen h-screen overflow-auto">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
