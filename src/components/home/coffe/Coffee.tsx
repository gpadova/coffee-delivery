import { CoffeeWrapper, Footer, IconWrapper, Subtitle, Title } from "./styles";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { Coffee } from "../../../consts/data";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { ActionsType } from "../../../types/styled";
import { useToast } from "@chakra-ui/react";

function Coffee(coffee: Coffee) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useGlobalContext();
  const toast = useToast();

  function insertItemIntoCart() {
    dispatch({
      type: ActionsType.ADD_TO_CART,
      payload: {
        data: {
          id: coffee.id,
          quantity,
          price: coffee.price,
          name: coffee.name,
        },
      },
    });
    toast({
      colorScheme: "green",
      position: "top-right",
      description: `Item ${coffee.name} adicionado com sucesso ao carrinho`,
      duration: 2000,
      isClosable: true,
      variant: "left-accent",
    });
    setQuantity(1);
  }
  return (
    <>
      <CoffeeWrapper>
        <img src={coffee.img_url} alt={`Imagem com o café ${coffee.name}`} />
        <div className="tags">
          {coffee !== undefined &&
            coffee.tags?.map((element, index) => <p key={index}>{element}</p>)}
        </div>
        <Title>
          <h3>{coffee.name}</h3>
        </Title>
        <Subtitle>
          <p>{coffee.description}</p>
        </Subtitle>
        <Footer>
          <div className="price">
            R$ <span>{coffee.price.toFixed(2).replace(".", ",")}</span>
          </div>
          <div className="quantity">
            <div className="up-and-down-price">
              <button
                disabled={quantity === 1}
                onClick={() => setQuantity((quant) => quant - 1)}
                className="simbol"
              >
                <Minus />
              </button>
              <div className="number"> {quantity} </div>
              <button
                onClick={() => setQuantity((quant) => quant + 1)}
                className="simbol"
              >
                <Plus />
              </button>
            </div>
            <IconWrapper onClick={insertItemIntoCart}>
              <ShoppingCart weight="fill" />
            </IconWrapper>
          </div>
        </Footer>
      </CoffeeWrapper>
    </>
  );
}

export default Coffee;
