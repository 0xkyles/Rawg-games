import { Image, Stack } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            align="center"
            justifyContent="space-between"
            paddingX="20px"
            paddingY="10px"
        >
            <Image src={logo} alt="Logo" boxSize="60px" rounded="full" />
            <SearchInput />
            <ColorModeSwitch />
        </Stack>
    );
};

export default Navbar;
