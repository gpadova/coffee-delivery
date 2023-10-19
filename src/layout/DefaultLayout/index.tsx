import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import { LayoutContainer } from "./styles";

function DefaultLayout() {
    return ( 
        <>
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
        </>
     );
}

export default DefaultLayout;