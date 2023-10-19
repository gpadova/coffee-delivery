import { styled } from "styled-components";
import Form from "../components/checkout/form";
import Payment from "../components/checkout/payment";
import CartComponent from "../components/checkout/cart";

function Checkout() {
  return (
    <>
      <CheckoutWrapper>
        <div className="right-itens">
          <Form />
          <Payment />
        </div>
        <CartComponent />
      </CheckoutWrapper>
    </>
  );
}

export default Checkout;

const CheckoutWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;
  .right-itens {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: inherit;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
