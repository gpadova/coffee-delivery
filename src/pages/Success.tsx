import styled from "styled-components";
import Title from "../components/success/Title";
import Info from "../components/success/Info";

function Success() {
  return (
    <>
      <SuccessWrapper>
        <div className="left-itens">
          <Title />
          <Info />
        </div>
        <div className="image-wrapper">
          <img
            src="src/assets/others/Illustration.png"
            alt="Imagem de um entregador em movimento"
          />
        </div>
      </SuccessWrapper>
    </>
  );
}

export default Success;

export const SuccessWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  margin-top: 1em;
  .image-wrapper {
    width: 90%;
  }
  .left-itens {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: inherit;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
