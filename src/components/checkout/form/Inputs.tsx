import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { ChangeEvent } from "react";

function Inputs() {
  const smallScreen = useMediaQuery("(max-width: 580px)");
  const { setAddress} = useGlobalContext();
  const { register } = useForm();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
  return (
    <>
      <InputsWrapper >
        <PersonalizedInput
          width={smallScreen ? "100%" : "35%"}
          placeholder="CEP"
          {...register('zip')}
          onChange={handleInputChange}
        />
        <PersonalizedInput {...register('street')} width={"100%"} placeholder="Rua" onChange={handleInputChange}/>
        <div className="street">
          <PersonalizedInput
            width={smallScreen ? "100%" : "20%"}
            placeholder="Número"
            {...register('number')}
            onChange={handleInputChange}
          />
          <PersonalizedInput
            width={smallScreen ? "100%" : "75%"}
            placeholder="Complemento"
            {...register('complement')}
            onChange={handleInputChange}
          />
        </div>
        <div className="city">
          <PersonalizedInput
            width={smallScreen ? "100%" : "20%"}
            placeholder="Bairro"
            {...register('neighborhood')}
            onChange={handleInputChange}
          />
          <div className="city-and-uf">
            <PersonalizedInput
              width={smallScreen ? "100%" : "78%"}
              placeholder="Cidade"
              {...register('city')}
              onChange={handleInputChange}
            />
            <PersonalizedInput
              width={smallScreen ? "100%" : "15%"}
              placeholder="UF"
              {...register('state')}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </InputsWrapper>
    </>
  );
}

export default Inputs;

export const InputsWrapper = styled.form`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  .street,
  .city {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
  }

  .city-and-uf {
    width: 75%;
    display: flex;
    justify-content: space-between;
    gap: inherit;
  }
  @media (max-width: 580px) {
    .street,
    .city,
    .city-and-uf {
      flex-direction: column;
    }
    .city-and-uf {
      width: 100%;
    }
  }
`;

export const PersonalizedInput = styled.input`
  padding: 18px 12px;
  border-radius: 4px;
  height: 30px;
  background-color: ${(props) => props.theme.base_button};
  border: 1px solid ${(props) => props.theme.base_input};
  font-size: 14px;
  color: ${(props) => props.theme.base_text};
  outline: none;
  width: ${(props) => props.width || "100%"};
`;
