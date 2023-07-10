import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
];

const SortMenu = ({ onSelectSortOrder, sortOrder }: Props) => {
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
                        onClick={() => onSelectSortOrder(sortOrder.value)}
                    >
                        {sortOrder.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortMenu;