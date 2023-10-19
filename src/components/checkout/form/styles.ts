import { styled } from "styled-components";

export const Formbox = styled.div`
  max-width: 660px;
  height: auto;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 40px;
`;

export const FormWrapper = styled.div`
  width: 90%;
  h2 {
    color: ${(props) => props.theme.base_subtitle};
    font-family: "Baloo 2";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin : 20px 0;
  }
`;