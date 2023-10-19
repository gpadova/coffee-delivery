import { Coffee } from "../../../consts/data";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import CartItem from "./CartItem";
import Details from "./Details";
import { CartBox, CartWrapper } from "./styles";
import { data } from "../../../consts/data";
import styled from "styled-components";

export interface CoffeCart extends Coffee {
  quantity: number;
}

function CartComponent() {
  const { cart } = useGlobalContext();
  const uniqueIds = new Set<string>(cart.map((val) => val.id));
  const cleanedCart: CoffeCart[] = Array.from(uniqueIds).map((id) => {
    const correspondantItem = data.find(
      (element) => element.id === id
    ) as Coffee;
    const response: CoffeCart = {
      id: id,
      quantity: cart
        .filter((item) => item.id === id)
        .reduce((total, current) => total + current.quantity, 0),
      price: correspondantItem.price,
      description: correspondantItem.description,
      img_url: correspondantItem.img_url,
      name: correspondantItem.name,
    };
    return response;
  });

  return (
    <>
      <CartWrapper>
        <CartBox>
          <CoffeContainer>
            {cleanedCart.map((coffee, index ) => (
              <>
                <CoffeWrapper>
                  <CartItem key={index} coffee={coffee} />
                </CoffeWrapper>
              </>
            ))}
          </CoffeContainer>
          <Details />
        </CartBox>
      </CartWrapper>
    </>
  );
}

export default CartComponent;

const CoffeWrapper = styled.div`
    padding-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.base_button};
`;
const CoffeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2em;
  margin-bottom: 2em;
`;
