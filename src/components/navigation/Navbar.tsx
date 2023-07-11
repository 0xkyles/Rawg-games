import { Image, Stack } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (search: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
    return (
        <Stack
            direction="row"
            align="center"
            justifyContent="space-between"
            paddingX="20px"
            paddingY="10px"
        >
            <Image src={logo} alt="Logo" boxSize="60px" rounded="full" />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </Stack>
    );
};

export default Navbar;
