import styled from "styled-components";

export const CoffeeWrapper = styled.div`
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  img {
    transform: translateY(-25px);
}
.tags {
    display: flex;
    gap: 5px;
    transform: translateY(-20px);
    p {
        background-color: ${(props) => props.theme.yellow_light};
        color: ${(props) => props.theme.yellow_dark};
        padding: 4px 8px;
        border-radius: 100px;
        font-family: Roboto;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        text-transform: uppercase;
    }
}
`;

export const Title = styled.div`
  h3 {
    color: ${(props) => props.theme.base_subtitle};
    text-align: center;
    font-family: "Baloo 2";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const Subtitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  p {
    width: 80%;
    text-align: center;
    color: ${(props) => props.theme.base_label};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  .price {
    color: ${(props) => props.theme.base_text};
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  span {
    font-family: "Baloo 2";
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
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
    height: 22px;
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

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.background};
`;
