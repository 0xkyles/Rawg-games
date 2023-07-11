import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../services/platformService";

interface Props {
    onSelectPlatform: (platformId: Platform["id"]) => void;
    selectedPlatformId?: Platform["id"];
}

const PlatformMenu = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data } = usePlatforms();
    const platform = data.results.find(
        (platform) => selectedPlatformId === platform.id
    );

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                {platform?.name || "Platform"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatform(platform.id)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformMenu;
