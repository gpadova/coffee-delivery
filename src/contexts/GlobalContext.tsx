import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { Action, ActionsType, Cart } from "../types/styled";

interface GlobalContextType {
  cart: Cart[];
  dispatch: Dispatch<Action>;
  paymentType: string;
  setPaymentType: Dispatch<SetStateAction<string>>;
  address: Address;
  setAddress: Dispatch<SetStateAction<Address>>;
}

interface Address {
  zip: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

const CoffeeContext = createContext<GlobalContextType>({
  cart: [],
  dispatch: () => {},
  paymentType: "",
  setPaymentType: () => {},
  address: {} as Address,
  setAddress: () => {}
});

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [paymentType, setPaymentType ] = useState<string>("");
  const [address, setAddress ] = useState<Address>({} as Address);

  const [cart, dispatch] = useReducer((state: Cart[], action: Action) => {
    switch (action.type) {
      case ActionsType.ADD_TO_CART:
        return [...state, action.payload.data];
        case ActionsType.ADD_ONE_FROM_CART:
          // eslint-disable-next-line no-case-declarations
          const targetAddItem = state.find(
            (element) => element.name === action.payload.data.name
          );
          if (targetAddItem) {
            return state.map((element) =>
              element.name === action.payload.data.name
                ? { ...element, quantity: element.quantity + 1 }
                : element
            );
          }
          return state;
        
      case ActionsType.REMOVE_ONE_FROM_CART:
        // eslint-disable-next-line no-case-declarations
        const targetItem = state.find(
          (element) => element.name === action.payload.data.name
        );

        if (targetItem) {
          if (targetItem.quantity > 1) {
            return state.map((element) =>
              element.id === action.payload.data.id
                ? { ...element, quantity: element.quantity - 1 }
                : element
            );
          } else {
            return state.filter(
              (element) => element.id !== action.payload.data.id
            );
          }
        }
        return state; // Return the current state if the item is not found

      case ActionsType.REMOVE_ALL_FROM_CART:
        return state.filter(
          (element) => element.name !== action.payload.data.name
        );
      default:
        return state;
    }
  }, []);
  return (
    <>
      <CoffeeContext.Provider value={{ cart, dispatch, paymentType, setPaymentType, address, setAddress }}>
        {children}
      </CoffeeContext.Provider>
    </>
  );
}

export const useGlobalContext = () => useContext(CoffeeContext);
