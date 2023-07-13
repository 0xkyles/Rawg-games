import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQuery from "./stores/gameQueryStore";
import { shallow } from "zustand/shallow";

const PlatformMenu = () => {
    const { data } = usePlatforms();
    const { selectedPlatformId, setPlatformId } = useGameQuery(
        (s) => ({
            selectedPlatformId: s.gameQuery.platformId,
            setPlatformId: s.setPlatformId,
        }),
        shallow
    );
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
                        onClick={() => setPlatformId(platform.id)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformMenu;
