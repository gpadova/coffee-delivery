import styled from "styled-components";

function Title() {
  return (
    <>
      <TitleWrapper>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </TitleWrapper>
    </>
  );
}

export default Title;

export const TitleWrapper = styled.div`
  width: 90%;
  h2 {
    color: ${(props) => props.theme.yellow_dark};
    font-family: "Baloo 2";
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 41.6px */
}
h3 {
    color: ${(props) => props.theme.base_subtitle}; 
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
  }
`;
