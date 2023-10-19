import { Clock, CurrencyDollarSimple, MapPin } from "@phosphor-icons/react";
import styled from "styled-components";
import { useGlobalContext } from "../../contexts/GlobalContext";

function Info() {
  const { address, paymentType } = useGlobalContext();
  return (
    <>
      <InfoWrapper>
        <InfoBox>
          <div className="item">
            <div className="icon">
              <MapPin color="#ffffff" weight="fill" size={20} />
            </div>
            <div className="text">
              <p>
                Entrega em <span className="bold">{address.street}, {address.number}</span>
                {address.neighborhood} - {address.city}, {address.state}
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon light-yellow">
              <Clock color="#ffffff" weight="fill" size={20} />
            </div>
            <div className="text">
              <p>Previsão de entrega</p>
              <p className="bold">20 min - 30 min</p>
            </div>
          </div>
          <div className="item">
            <div className="icon yellow">
              <CurrencyDollarSimple color="#ffffff" size={20} />
            </div>
            <div className="text">
              <p>
                Pagamento na entrega
              </p>
              <p className="bold">
                {paymentType}
              </p>
            </div>
          </div>
        </InfoBox>
      </InfoWrapper>
    </>
  );
}

export default Info;

export const InfoBox = styled.div`
  display: flex;
  max-width: 526px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 6px 36px;
  border: 1px solid #dbac2c;
  .item {
    display: flex;
    align-items: center;
    gap: 1em;
  }
  .icon {
    border-radius: 9999px;
    background: ${(props) => props.theme.purple};
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    color: ${(props) => props.theme.base_text};
    width: 80%;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .light-yellow {
    background: ${(props) => props.theme.yellow};
  }
  .yellow {
    background: ${(props) => props.theme.yellow_dark};
  }
  .bold {
    font-weight: 600;
  }
`;

export const InfoWrapper = styled.div`
  width: 90%;
`;
