import { styled } from "styled-components";

export const OurCoffeeSuperWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 3em;
`;

export const OurCoffeesWrapper = styled.div`
  width: 90%;
  h2 {
    color: ${(props) => props.theme.base_subtitle};
    font-family: "Baloo 2";
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; 
    margin-bottom: 30px;
  }
`;

export const CoffeesDisplay = styled.div` 
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3em;
`
