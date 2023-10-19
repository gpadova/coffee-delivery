import styled from "styled-components";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { NavLink } from "react-router-dom";

function Details() {
  const { cart, paymentType } = useGlobalContext();
  const { address } = useGlobalContext();
  console.log(address);
  const itensPrice = cart.reduce(
    (acc, cur) => (acc += cur.price * cur.quantity),
    0
  );
  return (
    <>
      <DetailsBox>
        <div className="small-price">
          <p className="text">Total Itens: </p>
          <p className="price">R$ {itensPrice.toFixed(2).replace(".", ",")}</p>
        </div>
        <div className="small-price">
          <p className="text">Entrega:</p>
          <p className="price">R$ 3,50</p>
        </div>
        <div className="big-price">
          <p className="final-text">Total:</p>
          <p className="final-price">
            R$ {(itensPrice + 3.5).toFixed(2).replace(".", ",")}
          </p>
        </div>
        <NavLink to={"/success"}>
          <button
            disabled={
              paymentType.length === 0 ||
              cart.length === 0 ||
              address.street === undefined ||
              address.city === undefined ||
              address.state === undefined ||
              address.number === undefined ||
              address.zip === undefined
            }
            className="confirm"
          >
            Confirmar Pedido
          </button>
        </NavLink>
      </DetailsBox>
    </>
  );
}

export default Details;

export const DetailsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  button {
    width: 100%;
    background-color: ${(props) => props.theme.yellow};
    padding: 12px 8px;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
  }
  button:disabled {
    opacity: 0.5;
  }
  .small-price,
  .big-price {
    display: flex;
    justify-content: space-between;
    width: 90%;
    display: flex;
  }
  .text,
  .price {
    color: ${(props) => props.theme.base_text};
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .final-text,
  .big-price {
    color: ${(props) => props.theme.base_subtitle};
    text-align: right;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
  }
`;
