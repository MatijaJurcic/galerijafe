import { NavBar } from "../common/NavBar";

const Pages = ({ children }) => {
    return ( 
        <>
        <NavBar />
        {children}
        </>
    )
}

export default Pages;