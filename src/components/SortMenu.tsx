import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQuery from "../stores/gameQueryStore";
import { shallow } from "zustand/shallow";

const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
];

const SortMenu = () => {
    const { sortOrder, setSortOrder } = useGameQuery(
        (s) => ({
            sortOrder: s.gameQuery.sortOrder,
            setSortOrder: s.setSortOrder,
        }),
        shallow
    );
    const currentSortOrder = sortOrders.find((s) => s.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                Order By : {currentSortOrder?.label || "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map((sortOrder) => (
                    <MenuItem
                        key={sortOrder.value}
                        onClick={() => setSortOrder(sortOrder.value)}
                    >
                        {sortOrder.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortMenu;
