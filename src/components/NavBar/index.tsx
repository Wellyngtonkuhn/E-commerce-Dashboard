import { Content, NavBarSection } from "./style";

import { FaArrowAltCircleDown, FaSun, FaMoon } from "react-icons/fa";

export default function NavBar() {
  return (
    <NavBarSection>
      <Content>
        <div>
          <h1>
            eye<span>wear</span>
          </h1>
        </div>

        <div>
          <div>
           <button> <FaSun /></button>
            <button><FaMoon /></button>
          </div>
          <div>
            <h3>Wellyngton Kuhn</h3>
            <button>
              <FaArrowAltCircleDown />
            </button>
          </div>
        </div>
      </Content>
    </NavBarSection>
  );
}
