import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import { ContainerLayOut } from "../../styles/ContainerLayOut";
import { MainDashBoard } from "./style";

export default function DashBoard() {
  return (
    <MainDashBoard>
      <ContainerLayOut>
        <SideMenu />
        <Outlet />
      </ContainerLayOut>
    </MainDashBoard>
  )
}
