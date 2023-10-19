import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import { SupperWrapper, HomeWrapper, TextWrapper, Bullets } from "./styles";
import homePageMainPhoto from "../../../assets/others/mainPhoto.png";

function HeroSection() {
  return (
    <>
      <SupperWrapper>
        <HomeWrapper>
          <TextWrapper>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <Bullets>
              <div className="item">
                <div className="icon">
                  <ShoppingCart size={20} weight="fill" />
                </div>
                <p>Compra simples e segura</p>
              </div>
              <div className="item">
                <div className="icon black">
                  <Package size={20} weight="fill" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div className="item">
                <div className="icon yellow-light">
                  <Timer size={20} weight="fill" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div className="item">
                <div className="icon purple">
                  <Coffee size={20} weight="fill" />
                </div>
                <p>O café chega fresquinho até você</p>
              </div>
            </Bullets>
          </TextWrapper>
          <div className="photo">
            <img src={homePageMainPhoto} alt="" />
          </div>
        </HomeWrapper>
      </SupperWrapper>
    </>
  );
}

export default HeroSection;
