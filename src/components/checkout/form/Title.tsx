import { MapPinLine } from "@phosphor-icons/react";
import { styled } from "styled-components";

function Title() {
  return (
    <FormTitle>
      <div className="icon">
        <MapPinLine />
      </div>
      <div className="text">
        <h3>Endereço de Entrega</h3>
        <h4>Informe o endereço que deseja receber seu pedido</h4>
      </div>
    </FormTitle>
  );
}

export default Title;

export const FormTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  h3,
  h4 {
    color: ${(props) => props.theme.base_subtitle};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  h4 {
    color: ${(props) => props.theme.base_text};
    font-size: 14px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .icon {
    color: ${(props) => props.theme.yellow_dark};
    font-size: 24px;
    height: 100%;
    margin-inline-end: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;
