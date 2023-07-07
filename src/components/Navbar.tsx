import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            align="center"
            justifyContent="space-between"
            padding="10px"
        >
            <Image src={logo} alt="Logo" boxSize="60px" rounded="full" />
            <ColorModeSwitch />
        </Stack>
    );
};

export default Navbar;
