import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import styled from "styled-components";
import { CoffeCart } from ".";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { ActionsType } from "../../../types/styled";


function CartItem({coffee}: {coffee: CoffeCart}) {
  const [quantity, setQuantity] = useState(coffee.quantity);
  const { dispatch } = useGlobalContext();
  return (
    <>
      <ItemWrapper>
        <div className="right">
          <div className="image">
            <img src={coffee.img_url} alt="Imagem do delicioso café" />
          </div>
          <Details>
            <p>{coffee.name}</p>
            <Actions>
              <div className="quantity">
                <div className="up-and-down-price">
                  <button
                    disabled={quantity === 1}
                    onClick={() => setQuantity((quant) => quant - 1)}
                    className="simbol"
                  >
                    <Minus onClick={() => dispatch({
                      type: ActionsType.REMOVE_ONE_FROM_CART,
                      payload: {
                        data: {
                          quantity: coffee.quantity,
                          price: coffee.price,
                          name: coffee.name,
                          id: coffee.id
                        }
                      }
                    })}/>
                  </button>
                  <div className="number"> {quantity} </div>
                  <button
                    onClick={() => setQuantity((quant) => quant + 1)}
                    className="simbol"
                  >
                    <Plus onClick={() => dispatch({
                      type: ActionsType.ADD_ONE_FROM_CART,
                      payload: {
                        data: {
                          quantity: coffee.quantity,
                          price: coffee.price,
                          name: coffee.name,
                          id: coffee.id
                        }
                      }
                    })}/>
                  </button>
                </div>
                <Remove onClick={() => dispatch({
                  type: ActionsType.REMOVE_ALL_FROM_CART,
                  payload: {
                    data: {
                      quantity: coffee.quantity,
                      price: coffee.price,
                      name: coffee.name,
                      id: coffee.id
                    }
                  }
                })}>
                  <Trash />
                  <p className="remove">REMOVER</p>
                </Remove>
              </div>
            </Actions>
          </Details>
        </div>
        <div className="price">R$ {(coffee.price * coffee.quantity).toFixed(2).replace(".", ",")}</div>
      </ItemWrapper>
    </>
  );
}

export default CartItem;

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  background-color: ${(props) => props.theme.base_button};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  padding: 0px 8px;
  gap: 5px;
  .remove {
    color: ${(props) => props.theme.base_text};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; 
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    display: flex;
    align-items: center;
    gap: 1em;
  }
  .image {
    width: 64px;
    height: 64px;
  }
`;

const Details = styled.div`
  p {
    color: ${(props) => props.theme.base_subtitle};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }
`;

const Actions = styled.div`
  .price {
    color: ${(props) => props.theme.base_text};
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .quantity {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .up-and-down-price {
    width: 56px;
    height: 22px;
    background-color: ${(props) => props.theme.base_button};
    border-radius: 6px;
    padding: 4px 10px;
    height: 32px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4px;
    .simbol {
      color: ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme.base_button};
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
    }
    .simbol:hover {
      cursor: pointer;
    }

    .number {
      color: ${(props) => props.theme.base_text};
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  }
`;
