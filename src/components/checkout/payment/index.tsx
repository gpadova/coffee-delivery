import { styled } from "styled-components";
import Title from "./Title";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { useGlobalContext } from "../../../contexts/GlobalContext";

function Payment() {
  const { paymentType, setPaymentType} = useGlobalContext();
  return (
    <>
      <PaymentWrapper>
        <PaymentBox>
          <Title />
          <PaymentOptions>
            <Option className={paymentType === "Cartão de Crédito" ? "selected" : ""} onClick={() => setPaymentType("Cartão de Crédito")}>
              <div className="icon">
                <CreditCard />
              </div>
              <div  className="text">
                <p>Cartão de crédito</p>
              </div>
            </Option>
            <Option className={paymentType === "Cartão de Débito" ? "selected" : ""} onClick={() => setPaymentType("Cartão de Débito")}>
              <div className="icon">
                <Bank />
              </div>
              <div className="text">
                <p>Cartão de débito</p>
              </div>
            </Option>
            <Option className={paymentType === "Dinheiro" ? "selected" : ""} onClick={() => setPaymentType("Dinheiro")}>
              <div className="icon">
                <Money />
              </div>
              <div className="text">
                <p>Dinheiro</p>
              </div>
            </Option>
          </PaymentOptions>
        </PaymentBox>
      </PaymentWrapper>
    </>
  );
}

export default Payment;

export const PaymentWrapper = styled.div`
  width: 90%;
`;

export const Option = styled.button`
  width: 177px;
  height: 49px;
  padding: 16px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.base_button};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  .icon {
    color: ${(props) => props.theme.purple};
  }
  .text {
    width: 100%;
  }
  p {
    color: ${(props) => props.theme.base_text};
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  gap: 12px;
  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const PaymentBox = styled.div`
  max-width: 660px;
  height: auto;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  .selected {
    background-color: ${props => props.theme.purple_light};
    border: 1px solid ${props => props.theme.purple };
  }
`;
