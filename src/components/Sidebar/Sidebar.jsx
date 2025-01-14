/** @format */

import SidebarLink from "../atoms/SidebarLink/SidebarLink";
import Button from "../atoms/Button/Button";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { token } = useSelector((state) => state.login);

  const handleLogout = () => {
    localStorage.clear();
    router.replace("/login");
  };

  return (
    <div className="flex flex-col justify-between w-1/4 p-12 fixed h-full bg-white">
      <div>
        <div className="mb-8">Threads</div>
        <div className="flex flex-col gap-4">
          <SidebarLink
            name="Homepage"
            icon="home"
            path="/homepage"
            active={pathname.includes("/homepage")}
          />
          <SidebarLink
            name="Leaderboard"
            icon="chart"
            path="/leaderboard"
            active={pathname.includes("/leaderboard")}
          />
        </div>
      </div>
      {token ? (
        <Button name="Logout" onClick={handleLogout}>
          <div>LOGOUT</div>
        </Button>
      ) : (
        <div className="flex gap-4">
          <Button
            name="Login"
            onClick={() => router.push("/login")}
            outline={true}
          >
            <div>MASUK</div>
          </Button>
          <Button name="Register">
            <div>DAFTAR</div>
          </Button>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
