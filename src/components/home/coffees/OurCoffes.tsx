import Coffee from "../coffe/Coffee";
import {
  CoffeesDisplay,
  OurCoffeeSuperWrapper,
  OurCoffeesWrapper,
} from "./styles";
import { data } from "../../../consts/data";

function OurCoffes() {
  return (
    <>
      <OurCoffeeSuperWrapper>
        <OurCoffeesWrapper>
          <h2>Nossos Cafés</h2>
          <CoffeesDisplay>
            {data.map((element) => {
              return <Coffee key={element.id} {...element} />;
            })}
          </CoffeesDisplay>
        </OurCoffeesWrapper>
      </OurCoffeeSuperWrapper>
    </>
  );
}

export default OurCoffes;
