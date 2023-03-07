import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import { MainDashBoard } from "./style";

export default function DashBoard() {
  return (
    <MainDashBoard>
      <SideMenu />
      <Outlet />
    </MainDashBoard>
  )
}
