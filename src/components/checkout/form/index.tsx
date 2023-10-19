import Inputs from "./Inputs";
import { FormWrapper, Formbox } from "./styles";
import Title from "./Title";

function Form() {
  return (
    <>
      <FormWrapper>
        <h2>Complete seu pedido</h2>
        <Formbox>
          <Title />
          <Inputs />
        </Formbox>
      </FormWrapper>
    </>
  );
}

export default Form;
