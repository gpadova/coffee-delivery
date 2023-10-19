import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import CoffeDeliveryLogo from "../../assets/others/CoffeDeliveryLogo";
import { HeaderWrapper, LocationAndCartWrapper } from "./styles";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <HeaderWrapper>
        <NavLink to={"/"}>
          <CoffeDeliveryLogo />
        </NavLink>
        <LocationAndCartWrapper>
          <div className="location">
            <MapPin size={32} weight="fill" />
            <p>Porto Alegre, RS</p>
          </div>
          <div className="cart">
            <NavLink to={"/checkout"}>
              <ShoppingCart size={32} weight="fill" />
            </NavLink>
          </div>
        </LocationAndCartWrapper>
      </HeaderWrapper>
    </>
  );
}

export default Header;
