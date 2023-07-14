import { Image, Stack } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            align="center"
            justifyContent="space-between"
            paddingX="20px"
            paddingY="10px"
        >
            <Link to="/">
                <Image
                    src={logo}
                    alt="Logo"
                    boxSize="60px"
                    objectFit="cover"
                    rounded="md"
                />
            </Link>
            <SearchInput />
            <ColorModeSwitch />
        </Stack>
    );
};

export default Navbar;
