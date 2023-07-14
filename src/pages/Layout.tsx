import { Box } from "@chakra-ui/react";
import Navbar from "../components/navigation/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Box padding="20px">
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;
