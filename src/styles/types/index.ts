import { lightTheme } from "../theme/light";

type Theme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
