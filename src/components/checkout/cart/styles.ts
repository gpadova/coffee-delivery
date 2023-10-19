import { styled } from "styled-components";

export const  CartBox = styled.div`
  max-width: 660px;
  height: auto;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px 44px 6px 44px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 40px;
`;

export const CartWrapper = styled.div`
    width: 90%;
    height: 100%;
`