import { Image, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <Stack direction="row" align="center">
            <Image src={logo} alt="Logo" boxSize="60px" />
            <Text>Rawg games</Text>
        </Stack>
    );
};

export default Navbar;
