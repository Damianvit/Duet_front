import NavBar from "./NavBar";
import PropertyList from "./PropertyList";
import PropertyData from "./PropertyData";
import { Router } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <PropertyList properties={PropertyData} />
        </>
    );
};

export default Layout;
