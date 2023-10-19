import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
padding: 2em 0;
`;

export const LocationAndCartWrapper = styled.div`
  display: flex;
  .location {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: ${props => props.theme.purple_light};
      color: ${props => props.theme.purple};
      border-radius: 5px;
      padding: 8px;
      margin-inline: 1.5em;
      gap: 0.5em;
    }
    .cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${props => props.theme.yellow_light};
        color: ${props => props.theme.yellow_dark};
        padding: 8px;
        border-radius: 5px;
   }
`;
