import { THEME } from "contants";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary1: string;
      primary2: string;
      primary3: string;
      primary4: string;
      secondary1: string;
      secondary2: string;
      secondary3: string;
      secondary4: string;
      success1: string;
      success2: string;
      alert1: string;
      alert2: string;
      error1: string;
      error2: string;
    };
  }
}
