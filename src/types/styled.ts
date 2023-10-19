import "styled-components";
import { defaultTheme } from "../styles/themes";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}


export type Cart = {
  id: string;
  quantity: number;
  price: number;
  name: string;
}

export type Action = {
  type: ActionsType;
  payload: {
    data: Cart
  }
}

export enum ActionsType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART",
  ADD_ONE_FROM_CART = "ADD_ONE_FROM_CART",
  REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART",
}