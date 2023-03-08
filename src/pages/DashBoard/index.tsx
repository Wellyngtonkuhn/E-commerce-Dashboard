import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import { Container } from "./style";
import { MainDashBoard } from "./style";

export default function DashBoard() {
  return (
    <MainDashBoard>
      <Container>
        <SideMenu />
        <Outlet />
      </Container>
    </MainDashBoard>
  )
}
