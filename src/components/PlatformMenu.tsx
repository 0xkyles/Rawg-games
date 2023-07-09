import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformMenu = () => {
    const { data } = usePlatforms();

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformMenu;
