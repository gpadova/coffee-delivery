import styled from "styled-components";

export const SupperWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  .photo {
      max-width: 350px;
      img {
          width: 100%;
        }
    }
    @media (max-width:780px) {
        flex-direction: column;
        .photo {
            margin-top: 50px;
        }
    }
    `;


export const TextWrapper = styled.div`
  max-width: 600px;
  h1 {
    font-size: 20px;
    font-weight: 800;
    color: ${(props) => props.theme.base_title};
    font-family: "Baloo 2";
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 16px;
  }
  h2 {
    color: ${(props) => props.theme.base_subtitle};
    font-size: 20px;
    font-style: normal;
    font-family: "Roboto";
    font-weight: 400;
    line-height: 130%; 
    margin-bottom: 70px;
  }

`;

export const Bullets = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  .item {
    max-width : 231px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    p {
      color: ${(props) => props.theme.base_text};
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  } 
  .icon {
    background-color: ${(props) => props.theme.yellow_dark};
    border-radius: 50%;
    padding: 8px;
    color: ${(props) => props.theme.background};
  }

  .yellow-light { 
    background-color: ${ props => props.theme.yellow};
}

.black {
      background-color: ${props => props.theme.base_text};
  }
.purple {
      background-color: ${props => props.theme.purple};
  }
`;
